const quizData = [
  {
    subject: "상식",
    questions: [
      {
        name: "대한민국 광역시 개수는?",
        answers: [
          { content: "6개", isAnswer: false },
          { content: "5개", isAnswer: true },
          { content: "7개", isAnswer: false },
          { content: "4개", isAnswer: false },
        ],
      },
      {
        name: "다음 중 해저부터 산꼭대기까지의 높이가 가장 높은 산은 무엇일까요?",
        answers: [
          { content: "에베레스트산", isAnswer: false },
          { content: "마우나케아산", isAnswer: true },
          { content: "킬리만자로산", isAnswer: false },
          { content: "몽블랑산", isAnswer: false },
        ],
      },
      {
        name: "일반적으로 성인의 심장은 하루에 약 몇 번 뛸까?",
        answers: [
          { content: "약 1만 번", isAnswer: false },
          { content: "약 5만 번", isAnswer: false },
          { content: "약 10만 번", isAnswer: true },
          { content: "약 50만 번", isAnswer: false },
        ],
      },
      {
        name: "일반적인 피아노 건반의 총개수는 몇 개일까요?",
        answers: [
          { content: "66개", isAnswer: false },
          { content: "76개", isAnswer: false },
          { content: "88개", isAnswer: true },
          { content: "101개", isAnswer: false },
        ],
      },
      {
        name: "다음 중 포유류가 아닌 동물은?",
        answers: [
          { content: "박쥐", isAnswer: false },
          { content: "펭귄", isAnswer: true },
          { content: "돌고래", isAnswer: false },
          { content: "오리너구리", isAnswer: false },
        ],
      },
      {
        name: "뜨거운 액체가 차가운 액체보다 더 빨리 어는 현상을 무엇이라 할까?",
        answers: [
          { content: "음바페 효과", isAnswer: false },
          { content: "마이스너 효과", isAnswer: false },
          { content: "음펨바 효과", isAnswer: true },
          { content: "마이너스 효과", isAnswer: false },
        ],
      },
      {
        name: "오스트레일리아(호주)의 수도는 어디일까요?",
        answers: [
          { content: "시드니", isAnswer: false },
          { content: "캔버라", isAnswer: true },
          { content: "멜버른", isAnswer: false },
          { content: "브리즈번", isAnswer: false },
        ],
      },
      {
        name: "지구의 대기에서 가장 큰 비율을 차지하는 기체는?",
        answers: [
          { content: "산소", isAnswer: false },
          { content: "이산화탄소", isAnswer: false },
          { content: "질소", isAnswer: true },
          { content: "아르곤", isAnswer: false },
        ],
      },
      {
        name: "세계에서 면적이 가장 넓은 사막은?",
        answers: [
          { content: "사하라 사막", isAnswer: false },
          { content: "고비 사막", isAnswer: false },
          { content: "남극 사막", isAnswer: true },
          { content: "아라비아 사막", isAnswer: false },
        ],
      },
      {
        name: "대한민국에서 두 번째로 큰 섬은 무엇일까요?",
        answers: [
          { content: "강화도", isAnswer: false },
          { content: "제주도", isAnswer: false },
          { content: "거제도", isAnswer: true },
          { content: "안면도", isAnswer: false },
        ],
      },
    ],
  },
  {
    subject: "역사",
    questions: [
      {
        name: "대한민국 임시정부는 어디에서 수립되었을까요?",
        answers: [
          { content: "충칭", isAnswer: false },
          { content: "블라디보스토크", isAnswer: false },
          { content: "한성", isAnswer: false },
          { content: "상하이", isAnswer: true },
        ],
      },
      {
        name: "임진왜란이 시작된 해는?",
        answers: [
          { content: "1392년", isAnswer: false },
          { content: "1492년", isAnswer: false },
          { content: "1592년", isAnswer: true },
          { content: "1636년", isAnswer: false },
        ],
      },
      {
        name: "16세기 종교 개혁의 도화선이 된, '95개조 반박문'을 발표한 신학자는 누구일까요?",
        answers: [
          { content: "장 칼뱅", isAnswer: false },
          { content: "마르틴 루터", isAnswer: true },
          { content: "에라스무스", isAnswer: false },
          { content: "존 오웬", isAnswer: false },
        ],
      },
      {
        name: "로마 제국의 초대 황제는?",
        answers: [
          { content: "아우구스투스", isAnswer: true },
          { content: "네로", isAnswer: false },
          { content: "율리우스 카이사르", isAnswer: false },
          { content: "콘스탄티누스", isAnswer: false },
        ],
      },
      {
        name: "인류 최초로 우주에 간 사람은?",
        answers: [
          { content: "닐 암스트롱", isAnswer: false },
          { content: "버즈 올드린", isAnswer: false },
          { content: "유리 가가린", isAnswer: true },
          { content: "존 글렌", isAnswer: false },
        ],
      },
      {
        name: "소크라테스의 제자가 아닌 인물은?",
        answers: [
          { content: "플라톤", isAnswer: false },
          { content: "아리스토텔레스", isAnswer: true },
          { content: "파이돈", isAnswer: false },
          { content: "알키비아데스", isAnswer: false },
        ],
      },
      {
        name: "제2차 세계대전이 시작된 해는?",
        answers: [
          { content: "1918년", isAnswer: false },
          { content: "1945년", isAnswer: false },
          { content: "1939년", isAnswer: true },
          { content: "1950년", isAnswer: false },
        ],
      },
      {
        name: "현존하는 세계에서 가장 오래된 금속 활자본으로 인정받는 것은?",
        answers: [
          { content: "구텐베르크 성서", isAnswer: false },
          { content: "직지심체요절", isAnswer: true },
          { content: "팔만대장경", isAnswer: false },
          { content: "무구정광대다라니경", isAnswer: false },
        ],
      },
      {
        name: "백년전쟁의 실제 전쟁 기간은?",
        answers: [
          { content: "103년", isAnswer: false },
          { content: "96년", isAnswer: false },
          { content: "100년", isAnswer: false },
          { content: "116년", isAnswer: true },
        ],
      },
      {
        name: "삼국유사를 저술한 사람은?",
        answers: [
          { content: "일연", isAnswer: true },
          { content: "최치원", isAnswer: false },
          { content: "김부식", isAnswer: false },
          { content: "정약용", isAnswer: false },
        ],
      },
    ],
  },
  {
    subject: "성경",
    questions: [
      {
        name: "예수님께서 광야에서 시험받으실 때 마귀는 성경 말씀을 몇 번 직접 인용했을까?",
        answers: [
          { content: "1번", isAnswer: true },
          { content: "2번", isAnswer: false },
          { content: "3번", isAnswer: false },
          { content: "인용하지 않음", isAnswer: false },
        ],
      },
      {
        name: "예수님이 물을 포도주로 바꾸신 사건이 일어난 곳은?",
        answers: [
          { content: "베들레헴", isAnswer: false },
          { content: "가나", isAnswer: true },
          { content: "여리고", isAnswer: false },
          { content: "가버나움", isAnswer: false },
        ],
      },
      {
        name: "모세가 십계명을 받은 산은?",
        answers: [
          { content: "갈멜산", isAnswer: false },
          { content: "시내산", isAnswer: true },
          { content: "감람산", isAnswer: false },
          { content: "느보산", isAnswer: false },
        ],
      },
      {
        name: "다니엘은 사자굴에 들어가기 전에 왕에게 절하지 않겠다는 뜻으로 하루 몇 번 기도했을까?",
        answers: [
          { content: "7번", isAnswer: false },
          { content: "3번", isAnswer: true },
          { content: "1번", isAnswer: false },
          { content: "5번", isAnswer: false },
        ],
      },
      {
        name: "노아의 방주에 탄 사람은 노아의 가족을 포함하여 총 몇 명일까?",
        answers: [
          { content: "6명", isAnswer: false },
          { content: "8명", isAnswer: true },
          { content: "10명", isAnswer: false },
          { content: "12명", isAnswer: false },
        ],
      },
      {
        name: "예수님이 태어나신 도시는?",
        answers: [
          { content: "나사렛", isAnswer: false },
          { content: "예루살렘", isAnswer: false },
          { content: "베들레헴", isAnswer: true },
          { content: "다메섹", isAnswer: false },
        ],
      },
      {
        name: "예수님이 광야에서 금식하신 기간은?",
        answers: [
          { content: "7일", isAnswer: false },
          { content: "12일", isAnswer: false },
          { content: "30일", isAnswer: false },
          { content: "40일", isAnswer: true },
        ],
      },
      {
        name: "마태복음에 나오는 아브라함부터 예수님까지의 총 대 수는?",
        answers: [
          { content: "42대", isAnswer: true },
          { content: "49대", isAnswer: false },
          { content: "77대", isAnswer: false },
          { content: "70대", isAnswer: false },
        ],
      },
      {
        name: "신약성경에서 바울이 회심하기 전에 사용했던 이름은?",
        answers: [
          { content: "시몬", isAnswer: false },
          { content: "사울", isAnswer: true },
          { content: "실라", isAnswer: false },
          { content: "스데반", isAnswer: false },
        ],
      },
      {
        name: "예수님이 제자들과 마지막 만찬을 나누신 명절은?",
        answers: [
          { content: "초막절", isAnswer: false },
          { content: "오순절", isAnswer: false },
          { content: "유월절", isAnswer: true },
          { content: "나팔절", isAnswer: false },
        ],
      },
    ],
  },
];
