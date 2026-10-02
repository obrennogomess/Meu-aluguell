import React, { useState } from 'react';
import { Star, X, Check } from 'lucide-react';
import { Review } from '../types';

interface AddReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (review: Omit<Review, 'id' | 'date' | 'helpfulCount'>) => void;
}

export const AddReviewModal: React.FC<AddReviewModalProps> = ({
  isOpen,
  onClose,
  onAddReview
}) => {
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');
  const [device, setDevice] = useState<'phone' | 'tablet'>('phone');
  const [hoverRating, setHoverRating] = useState(0);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    onAddReview({
      author: author.trim(),
      rating,
      content: content.trim(),
      device
    });

    setAuthor('');
    setContent('');
    setRating(5);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-3 border-b border-[#dadce0]">
          <h3 className="text-lg font-medium text-[#202124] google-sans">
            Avaliar &quot;Meu Aluguel&quot;
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 text-[#5f6368] hover:text-[#202124] hover:bg-[#f1f3f4] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {/* Star selector */}
          <div>
            <label className="block text-xs font-medium text-[#5f6368] mb-1.5">
              Sua nota para o aplicativo
            </label>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 text-[#dadce0] hover:scale-110 transition-transform cursor-pointer"
                >
                  <Star
                    className={`w-7 h-7 ${
                      (hoverRating || rating) >= star
                        ? 'fill-[#01875f] text-[#01875f]'
                        : 'text-[#dadce0]'
                    }`}
                  />
                </button>
              ))}
              <span className="ml-2 text-sm font-semibold text-[#01875f]">
                {rating} {rating === 1 ? 'estrela' : 'estrelas'}
              </span>
            </div>
          </div>

          {/* Author Name */}
          <div>
            <label className="block text-xs font-medium text-[#5f6368] mb-1">
              Seu nome completo
            </label>
            <input
              type="text"
              required
              placeholder="Ex: Gabriela Santos"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#dadce0] focus:border-[#01875f] focus:outline-none text-sm text-[#202124]"
            />
          </div>

          {/* Device used */}
          <div>
            <label className="block text-xs font-medium text-[#5f6368] mb-1">
              Dispositivo utilizado
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setDevice('phone')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                  device === 'phone'
                    ? 'border-[#01875f] bg-[#e6f4ea] text-[#01875f]'
                    : 'border-[#dadce0] text-[#5f6368]'
                }`}
              >
                Telefone
              </button>
              <button
                type="button"
                onClick={() => setDevice('tablet')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer ${
                  device === 'tablet'
                    ? 'border-[#01875f] bg-[#e6f4ea] text-[#01875f]'
                    : 'border-[#dadce0] text-[#5f6368]'
                }`}
              >
                Tablet
              </button>
            </div>
          </div>

          {/* Review text */}
          <div>
            <label className="block text-xs font-medium text-[#5f6368] mb-1">
              Sua experiência detalhada com o aplicativo
            </label>
            <textarea
              required
              rows={4}
              placeholder="Conte como o Meu Aluguel ajudou você no pagamento, contratos, recibos ou atendimento com o proprietário..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#dadce0] focus:border-[#01875f] focus:outline-none text-sm text-[#202124]"
            />
          </div>

          {/* Buttons */}
          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-[#5f6368] hover:text-[#202124] hover:bg-[#f1f3f4] rounded-lg transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-medium bg-[#01875f] hover:bg-[#0b6348] text-white rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Check className="w-4 h-4" />
              <span>Publicar avaliação</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
