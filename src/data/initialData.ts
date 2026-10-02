import { Review } from '../types';

export const INITIAL_REVIEWS: Review[] = [
  // The 3 original reviews from the original site
  {
    id: 'rev-orig-1',
    author: 'isa salles',
    date: '15/03/2024',
    rating: 5,
    content: 'Aplicativo 100% funcional, resolveu meu problema rapidamente, super recomendo.',
    helpfulCount: 32,
    device: 'phone'
  },
  {
    id: 'rev-orig-2',
    author: 'Caio Silva',
    date: '14/03/2024',
    rating: 5,
    content: 'Atendimento exemplar, o atendente foi super atencioso e ajudou no passo a passo do início ao fim. Eu simplesmente amei',
    helpfulCount: 29,
    device: 'phone'
  },
  {
    id: 'rev-orig-3',
    author: 'Jennifer Metcalf',
    date: '12/03/2024',
    rating: 5,
    content: 'Simples, fácil e seguro, mais pessoas deveriam conhecer este app é muito bom!',
    helpfulCount: 40,
    device: 'phone'
  },
  // Additional reviews specifically related to Meu Aluguel app as requested
  {
    id: 'rev-add-1',
    author: 'Marcos Vinícius Souza',
    date: '28/03/2024',
    rating: 5,
    content: 'Facilitou demais o pagamento do meu aluguel e a emissão dos boletos e recibos direto pelo app. Não preciso mais ficar pedindo comprovante por WhatsApp, fica tudo registrado com data e autenticação digital.',
    helpfulCount: 57,
    device: 'phone'
  },
  {
    id: 'rev-add-2',
    author: 'Mariana Castro Ribeiro',
    date: '26/03/2024',
    rating: 5,
    content: 'Excelente tanto para inquilino quanto para proprietário! O aviso automático de vencimento com 5 dias de antecedência ajuda muito a organizar as contas do mês. O suporte me atendeu com muita agilidade.',
    helpfulCount: 43,
    device: 'phone'
  },
  {
    id: 'rev-add-3',
    author: 'Rodrigo Medeiros',
    date: '22/03/2024',
    rating: 5,
    content: 'O laudo de vistoria digital é sensacional. O app permite adicionar fotos e observações detalhadas de cada cômodo antes de entrar no imóvel. Acabou com qualquer dor de cabeça na entrega das chaves.',
    helpfulCount: 38,
    device: 'tablet'
  },
  {
    id: 'rev-add-4',
    author: 'Beatriz Vasconcelos',
    date: '20/03/2024',
    rating: 5,
    content: 'Tive uma dúvida sobre o reajuste anual do meu aluguel pelo IPCA e o suporte respondeu em menos de 10 minutos pelo chat integrado. Sistema muito seguro, rápido e transparente.',
    helpfulCount: 26,
    device: 'phone'
  },
  {
    id: 'rev-add-5',
    author: 'Fernando Alencar Lima',
    date: '18/03/2024',
    rating: 5,
    content: 'Gerencio três imóveis alugados e esse aplicativo foi a melhor descoberta do ano. Consigo ver quem já efetuou o pagamento, gerar o extrato consolidado e enviar recibo automático. Recomendo de olhos fechados!',
    helpfulCount: 65,
    device: 'tablet'
  },
  {
    id: 'rev-add-6',
    author: 'Camila Rocha Duarte',
    date: '10/03/2024',
    rating: 5,
    content: 'Interface limpa, moderna e muito intuitiva. A opção de pagar com Pix Copia e Cola com baixa instantânea é perfeita. Muito prático!',
    helpfulCount: 21,
    device: 'phone'
  },
  {
    id: 'rev-add-7',
    author: 'Eduardo Pires Martins',
    date: '08/03/2024',
    rating: 5,
    content: 'Abri um chamado de manutenção para um vazamento na pia do imóvel alugado e o proprietário foi notificado na mesma hora com fotos e descrição. Em dois dias o reparo já estava feito. Nota 10!',
    helpfulCount: 34,
    device: 'phone'
  },
  {
    id: 'rev-add-8',
    author: 'Larissa Albuquerque',
    date: '05/03/2024',
    rating: 5,
    content: 'Contrato de locação sempre à mão em PDF com assinatura eletrônica válida juridicamente. Traz uma paz de espírito enorme. Sem propagandas chatas e muito rápido.',
    helpfulCount: 19,
    device: 'phone'
  },
  {
    id: 'rev-add-9',
    author: 'Thiago Nogueira',
    date: '02/03/2024',
    rating: 5,
    content: 'O melhor aplicativo para gerenciar aluguel da Play Store. Leve, consome pouca bateria e nunca me deixou na mão. Parabéns à equipe de desenvolvimento!',
    helpfulCount: 28,
    device: 'phone'
  }
];

export const APP_FEATURES = [
  {
    id: 'feat-1',
    title: 'Gestão Completa de Aluguel',
    description: 'Acompanhe contratos vigentes, valores, datas de vencimento e histórico de pagamentos em um painel unificado.',
    tag: 'Contratos e Prazos',
    highlight: 'Controle em tempo real'
  },
  {
    id: 'feat-2',
    title: 'Boletos, Pix & Recibos Automáticos',
    description: 'Emita 2ª via instantânea com código de barras e Pix Copia e Cola. Baixa automática e recibos com assinatura digital.',
    tag: 'Pagamento Descomplicado',
    highlight: 'Baixa imediata'
  },
  {
    id: 'feat-3',
    title: 'Chamados de Reparo & Suporte',
    description: 'Solicite manutenção diretamente ao proprietário com upload de fotos, orçamentos e acompanhamento do status.',
    tag: 'Manutenção Integrada',
    highlight: 'Chat com registro'
  },
  {
    id: 'feat-4',
    title: 'Vistoria Digital & Chaves',
    description: 'Checklist completo com fotos geolocalizadas na entrada e saída do imóvel, garantindo total segurança para ambas as partes.',
    tag: 'Segurança Jurídica',
    highlight: 'Laudo com fotos'
  }
];
