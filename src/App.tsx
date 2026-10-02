/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeatureCarousel } from './components/FeatureCarousel';
import { AboutSection } from './components/AboutSection';
import { DataSafetySection } from './components/DataSafetySection';
import { ReviewsSection } from './components/ReviewsSection';
import { AddReviewModal } from './components/AddReviewModal';
import { InstallModal } from './components/InstallModal';
import { Footer } from './components/Footer';
import { INITIAL_REVIEWS } from './data/initialData';
import { Review } from './types';
import { Check } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('apps');
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [installStatus, setInstallStatus] = useState<'idle' | 'installing' | 'installed'>('idle');
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
  const [isAddReviewModalOpen, setIsAddReviewModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleInstallClick = () => {
    if (installStatus === 'installed') {
      showToast('Aplicativo já está instalado no seu dispositivo!');
      return;
    }
    setIsInstallModalOpen(true);
  };

  const handleInstalled = () => {
    setInstallStatus('installed');
    showToast('Meu Aluguel instalado com sucesso!');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Meu Aluguel - Google Play',
        text: 'Confira o aplicativo Meu Aluguel para gestão de aluguel e contratos!',
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link do aplicativo copiado para a área de transferência!');
    }
  };

  const handleToggleWishlist = () => {
    setIsWishlisted((prev) => {
      const next = !prev;
      showToast(next ? 'Adicionado à sua lista de desejos!' : 'Removido da lista de desejos.');
      return next;
    });
  };

  const handleVoteHelpful = (reviewId: string, isYes: boolean) => {
    setReviews((prev) =>
      prev.map((r) => {
        if (r.id === reviewId) {
          const wasYes = r.userVoted === 'yes';
          const wasNo = r.userVoted === 'no';

          if (isYes) {
            if (wasYes) return { ...r, helpfulCount: r.helpfulCount - 1, userVoted: null };
            return {
              ...r,
              helpfulCount: wasNo ? r.helpfulCount + 1 : r.helpfulCount + 1,
              userVoted: 'yes'
            };
          } else {
            if (wasNo) return { ...r, userVoted: null };
            return {
              ...r,
              helpfulCount: wasYes ? Math.max(0, r.helpfulCount - 1) : r.helpfulCount,
              userVoted: 'no'
            };
          }
        }
        return r;
      })
    );
  };

  const handleAddReview = (newRev: Omit<Review, 'id' | 'date' | 'helpfulCount'>) => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('pt-BR');

    const created: Review = {
      id: `user-rev-${Date.now()}`,
      author: newRev.author,
      rating: newRev.rating,
      content: newRev.content,
      device: newRev.device,
      date: formattedDate,
      helpfulCount: 1,
      userVoted: 'yes'
    };

    setReviews([created, ...reviews]);
    showToast('Avaliação publicada com sucesso! Obrigado pelo comentário.');
  };

  return (
    <div className="min-h-screen bg-white text-[#202124] flex flex-col font-sans">
      {/* Header with Google Play text and category tabs */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => {
          const el = document.getElementById('reviews');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Single-Column Body Content matching Google Play layout */}
      <main className="flex-1 max-w-[1040px] w-full mx-auto px-4 sm:px-6">
        {/* Hero Section with Official Logo and App Info */}
        <HeroSection
          onInstall={handleInstallClick}
          onShare={handleShare}
          isWishlisted={isWishlisted}
          onToggleWishlist={handleToggleWishlist}
          installStatus={installStatus}
        />

        {/* Feature Carousel (Vector previews, no raster images) */}
        <FeatureCarousel />

        {/* Sections Stack in Exact Original Page Order */}
        <div className="space-y-2 mt-2">
          {/* Sobre Nosso Trabalho */}
          <AboutSection />

          {/* Mais Detalhes / Segurança de Dados */}
          <DataSafetySection />

          {/* Classificações e Resenhas */}
          <ReviewsSection
            reviews={reviews}
            onVoteHelpful={handleVoteHelpful}
            onOpenAddModal={() => setIsAddReviewModalOpen(true)}
          />
        </div>
      </main>

      {/* Global Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#202124] text-white px-4 py-2.5 rounded-lg shadow-xl text-xs sm:text-sm flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Modals */}
      <InstallModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
        onInstalled={handleInstalled}
      />

      <AddReviewModal
        isOpen={isAddReviewModalOpen}
        onClose={() => setIsAddReviewModalOpen(false)}
        onAddReview={handleAddReview}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
