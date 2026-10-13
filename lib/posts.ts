export type Post = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  cover: string;
  images: { src: string; caption?: string }[];
  body: string[]; // each string = one paragraph
};

export const posts: Post[] = [
  {
    slug: 'say-yes-campaign',
    title: 'Say Yes Campaign Awareness',
    date: '2026-10-9',
    excerpt:
      'We visited the students to introduce Prepzora and show how WhatsApp can make WAEC and JAMB practice easier.',
    cover: '/blog/say-yes-campaign/sayyescover.jpg',
    images: [
      { src: '/blog/say-yes-campaign/sayyes20.jpeg', caption: 'Introducing Prepzora to the students' },
      { src: '/blog/say-yes-campaign/sayyes2.jpeg', caption: 'Prepzora team in action' },
      { src: '/blog/say-yes-campaign/sayyes3.jpeg', caption: 'Students trying their first practice questions' },
      { src: '/blog/say-yes-campaign/sayyes4.jpeg', caption: 'Prepzora and Say Yes Team' },
    ],
    body: [ "What should students say YES to after saying NO to cultism, drugs, and other social vices? Education. Learning. Personal growth. A better future.",

      "Last Friday, we had the opportunity to visit a government secondary school as part of the Say Yes Campaign, an initiative organized to encourage students to say no to cultism, drug abuse, and other negative influences while saying YES to education, healthy living, learning, and positive choices.",

      "We were grateful to collaborate with the campaign organizer, who gave us the opportunity to introduce Prepzora to the students and demonstrate how we are making exam preparation more accessible through WhatsApp.",

      "During my session with the students, I shared a lesson I learned from one of my secondary school teachers: at every stage of life, do what is necessary to successfully complete that stage.",

      "I explained that when you fail to do what is required at a particular stage, you may have to return to complete it later. Imagine spending extra time, paying additional school fees, and repeating examinations simply because you didn't put in the necessary effort when you had the opportunity.",

      "For these students, that stage is secondary school. This is their time to learn, build a solid foundation, develop good study habits, and prepare adequately for their WAEC and JAMB examinations.",

      "That is one of the problems we are building Prepzora to solve. Students don't always need another complicated platform. Sometimes, they need a simple and consistent way to learn.",

      "Since many students already use WhatsApp, Prepzora meets them where they are. Our WhatsApp-native exam preparation platform helps students practise past questions, learn from explanations, and build the consistency they need as they prepare for their examinations.",

      "One of the highlights of the event was an interactive English Language quiz. We selected questions from Prepzora and challenged the students to answer them. The first question came and nobody got it right. The second question came, and still no correct answer. We continued until the fourth question, when a student finally got the answer.",

      "That moment was a powerful reminder that there is so much more to learn and practise. From English Language to Mathematics, Chemistry, Biology, and Physics, students need regular opportunities to test their knowledge, identify what they don't know, and improve. And that is exactly why consistent practice matters.",

      "We rewarded the winner with a cash prize and shared Prepzora flyers with students and the teachers, encouraging them to explore the platform and continue practising.",

      "I'm grateful to the Say Yes Campaign team for creating this opportunity and allowing us to contribute to a cause that aligns with our mission.",

      "At Prepzora, we believe every student deserves an accessible opportunity to prepare better for their examinations. We also believe that small, consistent learning efforts can make a meaningful difference over time. The journey to better examination outcomes starts with a decision to learn and the discipline to keep practising.",

      "Say NO to negative influences. Say YES to education. Say YES to learning. Say YES to your future. And when you say YES to learning, let Prepzora be part of your journey.",
      
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const sortedPosts = () =>
  [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

export const formatDate = (d: string) =>
  new Date(d).toLocaleDateString('en-NG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });