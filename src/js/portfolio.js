const header = {
  data() {
    return {
      names: [
        {id: 1, title: 'top'},
        {id: 2, title: 'game'},
        {id: 3, title: 'about-me'},
        {id: 4, title: 'work'},
        {id: 5, title: 'skill'},
        {id: 6, title: 'history'},
        {id: 7, title: 'contact'},
      ]
    }
  },
}
createApp(header).mount('#vue-header')

//////////////////////////////
//////////////////////////////
//////////////////////////////

const game = {
  data(){
    return{
      table:
      [
        [false,false,true,true],
        [false,false,true,true],
        [true,false,true,true],
        [false,false,true,true],
      ],
      isClear: false,
      timer: 0,
      isTimer: false,
    }
  },
  created(){
    // this.shuffle()
    // this.table = 
    // [
    //   [false,true,false,true],
    //   [true,true,true,true],
    //   [false,true,false,true],
    //   [true,true,true,true],
    // ]
  },
  methods:{
    boxTurn(rowIndex, colIndex){
      if( this.timer == 0 ){
        this.countUpTimer()
      }
      
      //左上
      this.checkOutOfRange( rowIndex-1, colIndex-1 )
      //右上
      this.checkOutOfRange( rowIndex+1, colIndex-1 )
      //左下
      this.checkOutOfRange( rowIndex-1, colIndex+1 )
      //右下
      this.checkOutOfRange( rowIndex+1, colIndex+1 )

      this.isClear = this.checkAllTrue()

      
    },

    //反転対象が枠内外のチェック
    checkOutOfRange( rowIndex, colIndex ){
      const tableLength = this.table[0].length
      if(rowIndex >= 0 && rowIndex < tableLength){
        if(colIndex >= 0 && colIndex < tableLength){
          this.reverseBool( rowIndex, colIndex)
          return false;
        }
      }
    },

    reverseBool( rowIndex, colIndex){
      this.table[rowIndex][colIndex] = !this.table[rowIndex][colIndex]
    },

    checkAllTrue(){
      //二次元配列を平らに
      const flat = _.flatten(this.table)

      //全てtrueならクリア
      return _.indexOf(flat, false) === -1
    },

    shuffle(){
      const length = this.table.length
      for(let r=0; r<length; r++){
        for(let c=0; c<length; c++){
          this.table[r][c] = Math.round(Math.random()) ? true : false
        }
      }

      //全てtrueならもう一度シャッフル
      if(this.checkAllTrue()){
        this.shuffle()
      }
      this.isClear = false
      this.timer = 0
    },

    countUpTimer(){
      if(!this.isClear){
        setTimeout(() => {
          if(this.isClear)return
          this.timer += 1
          this.countUpTimer()
        }, 1000)
      }
    }
  }

}
createApp(game).mount('#vue-top-game')




const workData = 
  [
    {
      id: 1,
      title: '飲食アプリ',
      files: ['haizen-01.jpg', 'haizen-02.jpg','haizen-figma.jpg', 'haizen-er.jpg'],
      describe: '飲食店向けの注文から配膳、会計までを管理するWebアプリです。現在開発中。DB設計、UI設計など実務を想定しながら開発を進めています。',
      tool: 'PHP, Laravel 6, MySQL, jQuery, Git, bootstrap4, figma, draw.io',
      git: 'https://github.com/lafrin/haizen',
      url: 'https://kokoiine.weblike.jp/haizen'
    },
    {
      id: 2, 
      title: 'Hayashida\'s Portfolio', 
      files: ['portfolio-01.jpg','portfolio-02.jpg'],
      describe: 'このポートフォリオサイトです。一部にVueを使用しています。',
      tool: 'HTML, SCSS(BEM), JavaScript, Vue, chart.js',
      git: '',
      url: ''
    },
    {
      id: 3, 
      title: 'kokoiine!', 
      files: ['kokoiine_01.jpg','kokoiine_02.jpg'],
      describe: '日本中のいいね（オススメポイント）だけを集める投稿型のマップです。観光地などを探すときに、オススメだけが表示されたら便利だなと思い制作しました。\nログインやメールはPHPで1から実装しています。アクセスが多すぎると課金が発生してしまうのが難点です。ファイルを分けて整理することの重要性を学びました。',
      tool: 'PHP, MySQL, jQuery, GoogleMapApi ',
      git: '',
      url: 'https://kokoiine.weblike.jp/kokoiine/'
    },

    // {
    //   id: 4, 
    //   title: 'javaアプリ', 
    //   files: ['java_list.jpg'],
    //   describe: 'サーブレットssを使用したファイルブラウザを作成しました。',
    //   tool: 'java1.8',
    //   git: '',
    //   url: ''
    // },
    {
      id: 5, 
      title: 'スマホゲーム', 
      files: ['minigame-01.jpg','minigame-02.jpg','minigame-03.jpg','minigame-04.jpg','minigame-05.jpg',　'minigame-06.jpg',],
      describe: '訓練校に通いながら開発した子供向けミニゲーム集のAndroidアプリです。『子供も大人も簡単に楽しめる』をコンセプトにしています。Androidライフサイクルを理解するのに時間がかかりました。\n\nゲームをクリアしてコインを集めると、お庭の電気ネズミにおやつを買って与えることができます。イラストはほぼ自前です。全体を通してプログラミングの楽しさを再確認できました。',
      tool: 'Android Studio 3',
      git: '',
      url: ''
    },
    {
      id: 6, 
      title: 'Web CM', 
      files: ['cm-01.jpg', 'cm-02.jpg', 'cm-03.jpg'],
      describe: 'Youtubeの広告を作成しました。クライアントと話し合い、前半は難しく、後半にスッキリという流れで作っています。実際にお問い合わせが増えたようで、クライアントからは高評価を頂いております。',
      tool: 'AE6',
      git: '',
      url: 'https://www.youtube.com/watch?v=ecKd-cDc8IU'
    },
    // {
    //   id: 7, 
    //   title: 'イラスト', 
    //   files: ['kokoiine_01.jpg','kokoiine_02.jpg'],
    //   describe: '',
    //   tool: 'phtooshop, sai',
    //   git: '',
    //   url: ''
    // },
  ];

const work = createApp({
  data() {
    return {
      showModal: false,
      works: workData,
      title: 'titlaae',
      describe: '',
      tool: '',
      path: 'public/img/work/',
      image: 'haizen_01.jpg',
      files: ['kokoiine_01.jpg','kokoiine_02.jpg'],
      git: '',
      url: '',
    }
  },
  created() {
    const selectWork = _.find(this.works,{id:1})
    this.title = selectWork.title
    this.describe = selectWork.describe
    this.tool = selectWork.tool
    this.image = this.path + selectWork.files[0]
    this.files = selectWork.files
    this.git = selectWork.git
    this.url = selectWork.url
  },
  computed:{
    
  },
  methods:{
    showWorkModal(id){
      this.showModal = true

      const selectWork = _.find(this.works,{id: id})
      this.title = selectWork.title
      this.describe = selectWork.describe
      this.tool = selectWork.tool
      this.image = this.path + selectWork.files[0]
      this.files = selectWork.files
      this.git = selectWork.git
      this.url = selectWork.url
      // this.thumbnail = selectWork.thumbnail
    },
    clickThumbnail(e){
      this.image = this.path + e.currentTarget.dataset.img
    },
    clickHideBG(){
      this.shoModal = false
    }
  }
})

work.component("modal", {
  template: "#modal-template",
})

work.mount('#vue-work-box')


//////////////////////////////



const Skill = {
  data() {
    return {
      skills: [
        {id: 1, title: 'chartFront'},
        {id: 2, title: 'chartBack'},
        {id: 3, title: 'chartEtc'},
      ]
    }
  },
}
createApp(Skill).mount('#vue-skill-box')


// import { createApp } from '@vue/runtime-dom'
////////////////////////////////////////////
import Chart from 'chart.js/auto';
let ctx = document.getElementById('chartFront');
let chartTitle = "フロントエンド";
let labels = ['HTML/CSS', 'SCSS', 'JS', 'jQuery', 'React / Vue', 'Wordpress',];
const chart1 = makeChart(ctx, chartTitle, labels, [3,1,2,3,0,2]);

ctx = document.getElementById('chartBack');
chartTitle = "バックエンド";
labels = ['PHP', 'Laravel', 'Ruby', 'MySQL', ];
const chart2 = makeChart(ctx, chartTitle, labels, [3,2,1,3]);

ctx = document.getElementById('chartEtc');
chartTitle = "etc";
labels = ['Windows', 'Mac', 'Linax', 'Git', 'docker', 'AWS'];
const chart3 = makeChart(ctx, chartTitle, labels, [3,2,2,3,1,1]);

function makeChart(ctx, title, labels, values){

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: { 
        labels: labels,
        datasets: [{
            label: false, 
            data: values,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: title
        },
        tooltips: {
          enabled: false //Tooltipの非表示
        },
        legend:{
          display: false
        }
      },
      // maxBarThickness: 20,
      // barPercentage: 50,
      indexAxis: 'y',
      scales: {
          y: {
              beginAtZero: true,
              // max: 5,
          },
          x:{
            max: 4,
          }
      },
      
    }
  });

  return myChart;
}
//////////////////////////////////////////////

let historyData = 
[
  {
    year: 1986, 
    title: '誕生', 
    comment: '5人兄弟の末っ子として自宅で生を受ける。\n兄弟の荒波に揉まれて育つ。',
    image: 'baby.png',
    isClose: true
  },
  {
    year: 1998, 
    title: 'アニメやゲームが大好き学生', 
    comment: '幼稚園からゲームに目覚め、将来の夢はテレビゲームを作る事！\n高校の授業でcobolを習うも訳が分からず挫折。',
    image: 'pg-stady.png',
    isClose: true
  },
  {
    year: 2006, 
    title: '何となくで決めた就職先…', 
    comment: '上司とうまくコミュニケーションが取れずに退職。\n人との接し方について考えるようになる。',
    image: 'zasetsu.png',
    isClose: false
  },
  {
    year: 2007, 
    title: '本当にやりたいこと - いざ東京へ', 
    comment: '本気でデザインを学ぶため、覚悟を決めて単身で上京。新聞配達をしながら必死に学ぶ。',
    image: 'shinbun-stady.png',
    isClose: false
  },
  {
    year: 2009, 
    title: '念願のゲームデザイナーになる', 
    comment: '3DCGデザイナーとして就職。7年目で最大目標だった「有名タイトルの業務に関わりたい」を某ドラゴンRPGで達成。\n業務でスクリプトを書くうちにプログラミングが好きになり、心機一転プログラマーを目指すことを決意！',
    image: 'mokuhyo2.png',
    isClose: true
  },
  {
    year: 2017, 
    title: 'エラーと戦う日々', 
    comment: '独学するもエラーと格闘し、思うようにいかない日々。\nタイミングよく職業訓練校が見つかり、Javaを学びつつ、Androidのミニゲームアプリを作成。',
    image: 'pg-down.png',
    isClose: true
  },
  {
    year: 2018, 
    title: 'そしてプログラマーへ', 
    comment: '小さい会社に就職が決まり輝かしい未来を思い描くも、すぐにAndroid担当が自分一人という状況になる。\n引き継いだアプリを何とかリリースするも心身ともに疲弊する。',
    image: 'smartphone.png',
    isClose: true
  },
  {
    year: 2018, 
    title: '旅に出た', 
    comment: '退職2週間前に、高校の時から自転車で旅をしたかったことをふと思い出して実行。約1年かけて日本一周を達成。\n様々な人と話し、笑い、喜び、助けて貰う。',
    image: 'japan.png',
    isClose: true
  },
  {
    year: 2019, 
    title: '妻を迎える', 
    comment: '日本一周後すぐに結婚。新婚旅行に出発するもコロナウィルス蔓延で途中帰還する。\nプログラミングで日本一周の経験を生かせないかと、Web言語について学び始める。\nwebアプリ【kokoiine】を開発。',
    image: 'wedding.png',
    isClose: false
  },
  {
    year: 2021, 
    title: 'プログラマー再び', 
    comment: '派遣でWeb系の会社に出向し、プログラミングにどっぷり浸かる。',
    image: 'pg-job.png',
    isClose: true
  }
];

let History = {
  data() {
    return {
      histories: historyData,
      show: ''
    }
  }
  ,
  methods: {
    historyClose(){
      this.histories.forEach(element => {
        element.isClose = false;
      });
      // alert(this.histories);
    }
  }
}
createApp(History).mount('#vue-history-box')




/////////////////
//form
import axios from 'axios';
let Form = {
  data(){
    return{
      form: {
        name: '',
        email: '',
        comment: '',
        // name: 'ppop',
        // email: 'riris.lafih.music@gmail.com',
        // comment: 'テスト送信',
      },
      errorMessage: {
        name: '名前を入れてください',
        email: 'メールアドレスを入力してください',
        comment: 'コメントを入力してください',
      },
      isValid: false
    }
  },
  computed: {
    validation(){
      const form = this.form
      return{
        name: !form.name,
        email: (function() {
          if(!form.email ||
            !form.email.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/)) {
            return true
          }
          return false;
        })(),
        comment: !form.comment,
      }
    }
  },
  methods:{
    sendMail(){
      const form = this.form
      if(form.name && form.email && form.comment){

        let data = new FormData();
        data.append('name',form.name)
        data.append('email', form.email)
        data.append('comment', form.comment)
        const config = {
          headers: {
              'content-type': 'application/x-www-form-urlencoded'
          }
        }


        axios.post('functions/email.php', data)
        .then(function(response){
          console.log(response)
          confirm('送信しました')
        })
        .catch(function(error){
          console.log(error) 
        })

      }else{
        alert('入力されていない項目があります。')
      }
       

      return true;
    }
  }
}

createApp(Form).mount('#vue-mail-form')

