import React, { useState } from 'react';
import { Star, Smartphone, Tablet, Info, MoreVertical, Plus, Search, ThumbsUp, ThumbsDown, Check, ArrowRight } from 'lucide-react';
import { Review } from '../types';

interface ReviewsSectionProps {
  reviews: Review[];
  onVoteHelpful: (reviewId: string, isYes: boolean) => void;
  onOpenAddModal: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  reviews,
  onVoteHelpful,
  onOpenAddModal
}) => {
  const [selectedDevice, setSelectedDevice] = useState<'phone' | 'tablet' | 'all'>('phone');
  const [filterType, setFilterType] = useState<'all' | 'useful' | 'recent'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Color generator for avatar letters
  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-emerald-600',
      'bg-blue-600',
      'bg-indigo-600',
      'bg-violet-600',
      'bg-amber-600',
      'bg-teal-600',
      'bg-rose-600'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  };

  // Filter reviews
  const filteredReviews = reviews.filter((r) => {
    if (selectedDevice !== 'all' && r.device && r.device !== selectedDevice) {
      // If user chose tablet or phone specifically
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchAuthor = r.author.toLowerCase().includes(q);
      const matchContent = r.content.toLowerCase().includes(q);
      if (!matchAuthor && !matchContent) return false;
    }
    return true;
  }).sort((a, b) => {
    if (filterType === 'useful') {
      return b.helpfulCount - a.helpfulCount;
    }
    return 0; // default order
  });

  const displayedReviews = filteredReviews.slice(0, visibleCount);

  return (
    <section id="reviews" className="py-6 border-b border-[#dadce0]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#202124] text-white px-4 py-2.5 rounded-lg shadow-lg text-sm flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg sm:text-xl font-medium text-[#202124] google-sans">
              Classificações e resenhas
            </h2>
            <button
              onClick={() => showToast('Classificações verificadas pelo Google Play')}
              aria-label="Mais informações sobre avaliações"
              className="text-[#01875f] hover:bg-[#e6f4ea] p-1.5 rounded-full transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-1.5 mt-1 text-xs text-[#5f6368]">
            <span>As notas e avaliações são verificadas</span>
            <Info className="w-3.5 h-3.5 text-[#5f6368]" />
          </div>
        </div>

        {/* Add Review Button */}
        <div>
          <button
            onClick={onOpenAddModal}
            className="px-4 py-2 bg-[#01875f] hover:bg-[#0b6348] text-white text-xs sm:text-sm font-medium rounded-lg flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Avaliar aplicativo</span>
          </button>
        </div>
      </div>

      {/* Device Filter Chips */}
      <div className="mt-5 flex items-center gap-2">
        <button
          onClick={() => setSelectedDevice('phone')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
            selectedDevice === 'phone'
              ? 'border-[#01875f] bg-[#e6f4ea] text-[#01875f] font-semibold'
              : 'border-[#dadce0] text-[#5f6368] hover:bg-[#f8f9fa]'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Telefone</span>
        </button>

        <button
          onClick={() => setSelectedDevice('tablet')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
            selectedDevice === 'tablet'
              ? 'border-[#01875f] bg-[#e6f4ea] text-[#01875f] font-semibold'
              : 'border-[#dadce0] text-[#5f6368] hover:bg-[#f8f9fa]'
          }`}
        >
          <Tablet className="w-3.5 h-3.5" />
          <span>Tablet</span>
        </button>

        <button
          onClick={() => setSelectedDevice('all')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
            selectedDevice === 'all'
              ? 'border-[#01875f] bg-[#e6f4ea] text-[#01875f] font-semibold'
              : 'border-[#dadce0] text-[#5f6368] hover:bg-[#f8f9fa]'
          }`}
        >
          <span>Todos</span>
        </button>
      </div>

      {/* Rating Breakdown & Stats */}
      <div className="mt-6 flex flex-col md:flex-row items-center gap-8 bg-[#f8f9fa] p-5 rounded-2xl border border-[#dadce0]/70">
        {/* Score Column */}
        <div className="flex flex-col items-center justify-center shrink-0">
          <div className="text-5xl font-normal text-[#202124] tracking-tight google-sans">
            5,0
          </div>
          <div className="flex items-center gap-0.5 mt-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 fill-[#01875f] text-[#01875f]" />
            ))}
          </div>
          <div className="text-xs text-[#5f6368] mt-1.5">
            404.819 avaliações
          </div>
        </div>

        {/* Distribution Bars */}
        <div className="flex-1 w-full max-w-md space-y-1.5">
          {/* 5 Stars */}
          <div className="flex items-center gap-3 text-xs text-[#5f6368]">
            <span className="w-3 text-right">5</span>
            <div className="flex-1 h-2.5 bg-[#e8eaed] rounded-full overflow-hidden">
              <div className="h-full bg-[#01875f] rounded-full w-[96%]" />
            </div>
          </div>
          {/* 4 Stars */}
          <div className="flex items-center gap-3 text-xs text-[#5f6368]">
            <span className="w-3 text-right">4</span>
            <div className="flex-1 h-2.5 bg-[#e8eaed] rounded-full overflow-hidden">
              <div className="h-full bg-[#01875f] rounded-full w-[3.2%]" />
            </div>
          </div>
          {/* 3 Stars */}
          <div className="flex items-center gap-3 text-xs text-[#5f6368]">
            <span className="w-3 text-right">3</span>
            <div className="flex-1 h-2.5 bg-[#e8eaed] rounded-full overflow-hidden">
              <div className="h-full bg-[#01875f] rounded-full w-[0.5%]" />
            </div>
          </div>
          {/* 2 Stars */}
          <div className="flex items-center gap-3 text-xs text-[#5f6368]">
            <span className="w-3 text-right">2</span>
            <div className="flex-1 h-2.5 bg-[#e8eaed] rounded-full overflow-hidden">
              <div className="h-full bg-[#01875f] rounded-full w-[0.2%]" />
            </div>
          </div>
          {/* 1 Star */}
          <div className="flex items-center gap-3 text-xs text-[#5f6368]">
            <span className="w-3 text-right">1</span>
            <div className="flex-1 h-2.5 bg-[#e8eaed] rounded-full overflow-hidden">
              <div className="h-full bg-[#01875f] rounded-full w-[0.1%]" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Secondary Filter Row */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Search input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-[#5f6368] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Pesquisar nos comentários..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-[#dadce0] focus:border-[#01875f] focus:outline-none bg-white text-[#202124]"
          />
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto no-scrollbar">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1 text-xs rounded-full border transition-colors cursor-pointer shrink-0 ${
              filterType === 'all'
                ? 'bg-[#e6f4ea] border-[#01875f] text-[#01875f] font-medium'
                : 'border-[#dadce0] text-[#5f6368] hover:bg-[#f8f9fa]'
            }`}
          >
            Todas as resenhas
          </button>
          <button
            onClick={() => setFilterType('useful')}
            className={`px-3 py-1 text-xs rounded-full border transition-colors cursor-pointer shrink-0 ${
              filterType === 'useful'
                ? 'bg-[#e6f4ea] border-[#01875f] text-[#01875f] font-medium'
                : 'border-[#dadce0] text-[#5f6368] hover:bg-[#f8f9fa]'
            }`}
          >
            Mais úteis
          </button>
        </div>
      </div>

      {/* Reviews List (NO RASTER IMAGES - Pure SVG & Initial Avatars) */}
      <div className="mt-6 space-y-6">
        {displayedReviews.length === 0 ? (
          <div className="text-center py-8 text-sm text-[#5f6368]">
            Nenhum comentário encontrado com os filtros selecionados.
          </div>
        ) : (
          displayedReviews.map((review) => (
            <article key={review.id} className="space-y-2 border-b border-[#f1f3f4] pb-6 last:border-b-0">
              {/* Review Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Clean Initial Letter Avatar (NO RASTER IMAGES) */}
                  <div
                    className={`w-9 h-9 rounded-full ${getAvatarColor(
                      review.author
                    )} text-white flex items-center justify-center text-sm font-semibold shadow-2xs select-none`}
                  >
                    {review.author.trim().charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[#202124] block">
                      {review.author}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => showToast('Opções da avaliação')}
                  className="p-1.5 text-[#5f6368] hover:text-[#202124] hover:bg-[#f1f3f4] rounded-full transition-colors"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

              {/* Stars & Date */}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[#01875f] text-[#01875f]"
                    />
                  ))}
                </div>
                <span className="text-xs text-[#5f6368]">{review.date}</span>
              </div>

              {/* Review Content */}
              <p className="text-sm text-[#3c4043] leading-relaxed">
                {review.content}
              </p>

              {/* Helpful count */}
              <div className="text-xs text-[#5f6368]">
                Essa avaliação foi marcada como útil por {review.helpfulCount} pessoas
              </div>

              {/* Helpful question & buttons */}
              <div className="flex items-center gap-3 pt-1 text-xs text-[#5f6368]">
                <span>Você achou isso útil?</span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      onVoteHelpful(review.id, true);
                      showToast('Obrigado pelo feedback!');
                    }}
                    className={`px-3 py-1 rounded-full border text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                      review.userVoted === 'yes'
                        ? 'bg-[#e6f4ea] border-[#01875f] text-[#01875f]'
                        : 'border-[#dadce0] hover:bg-[#f8f9fa] text-[#3c4043]'
                    }`}
                  >
                    <ThumbsUp className="w-3 h-3" />
                    <span>Sim</span>
                  </button>
                  <button
                    onClick={() => {
                      onVoteHelpful(review.id, false);
                      showToast('Obrigado pelo feedback!');
                    }}
                    className={`px-3 py-1 rounded-full border text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                      review.userVoted === 'no'
                        ? 'bg-[#fce8e6] border-[#d93025] text-[#d93025]'
                        : 'border-[#dadce0] hover:bg-[#f8f9fa] text-[#3c4043]'
                    }`}
                  >
                    <ThumbsDown className="w-3 h-3" />
                    <span>Não</span>
                  </button>
                </div>
              </div>
            </article>
          ))
        )}
      </div>

      {/* Ver todas as avaliações button */}
      {visibleCount < filteredReviews.length && (
        <div className="mt-4 pt-2">
          <button
            onClick={() => setVisibleCount((prev) => prev + 5)}
            className="text-sm font-medium text-[#01875f] hover:underline cursor-pointer"
          >
            Ver todas as avaliações ({filteredReviews.length})
          </button>
        </div>
      )}
    </section>
  );
};
