
const workData = 
  [
    {
      id: 1, title: '飲食アプリ', url: 'haizen_01.jpg',
      describe: '飲食店向けの注文から配膳、会計までを管理するWebアプリを現在開発中です。スピードが要求される場面が多いと思いますので、Reactへの以降を検討中です。',
      tool: 'PHP / Laravel 6 / MySQL / jQuery /Git / bootstrap4 ',
    },
    {
      id: 2, title: 'kokoiine', url: 'kokoiine_02.jpg', tool: ''
    },
    {
      id: 3, title: '本サイト', url: 'haizen_01.jpg', tool: ''
    },
    {
      id: 4, title: 'javaアプリ', url: 'java_list.jpg', tool: ''
    },
    {
      id: 5, title: 'スマホゲーム', url: 'haizen_01.jpg', tool: ''
    },
    {
      id: 6, title: 'Web CM', url: 'top-kensetu.jpg', tool: ''
    },
    {
      id: 7, title: 'イラスト', url: 'top-kensetu.jpg', tool: ''
    },
  ];

const work = createApp({
  data() {
    return {
      showModal: true,
      works: workData,
      title: 'titlaae',
      describe: '',
      tool: '',
      image: '',
      thumbnail: [],
    }
  },
  created() {
    const selectWork = _.find(this.works,{id:1})
    this.title = selectWork.title
    this.describe = selectWork.describe
    this.tool = selectWork.tool
    this.image = selectWork.image
    this.thumbnail = selectWork.thumbnail
  },
  methods:{
    showWorkModal(id){
      this.showModal = true
      // const modal = document.getElementById('work-modal');
      // modal.classList.add('show')
      const selectWork = _.find(this.works,{id:id})
      this.title = selectWork.title
      // mainImage.style.backgroundImage= "url(/public/img/work/"+ selectWork.url +")"
      // console.log( "url(/public/img/work/"+ selectWork.url +")" )
      console.log(selectWork )
    }
  }
})

work.component("modal", {
  template: "#modal-template",
})

work.mount('#vue-work-box')



// const app = createApp({
//   data() {
//     return {
//       showModal: false,
//       works: workData,
//       title: 'titlaae',
//       describe: '',
//       tool: '',
//       image: '',
//       thumbnail: [],
//     }
//   }
// })

// app.component("modal", {
//   template: "#modal-template",
// })

// app.mount('#app')



const Skill = {
  data() {
    return {
      skills: [
        {id: 1, title: 'chartLang'},
        {id: 2, title: 'chartPp'},
        {id: 3, title: 'chartOo'},
      ]
    }
  },
}
createApp(Skill).mount('#vue-skill-box')


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
    comment: '3DCGデザイナーとして就職。最大目標だった「有名タイトルの業務に関わりたい」を某ドラゴンRPGで達成。\n業務でスクリプトを書くうちにプログラミングが好きになり、心機一転プログラマーを目指すことを決意！',
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
    comment: '小さい会社に就職が決まり輝かしい未来を思い描くも、教育担当の上司がすぐに辞めてしまい、Android担当が自分一人という状況になる。\n引き継いだアプリを何とかリリースするも心身ともに疲弊する。',
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
    comment: '日本一周後すぐに結婚。新婚旅行に出発するもコロナウィルス蔓延で途中帰還する。\nなんやかんやでプログラミングは好きだったので、Web言語について学び始める。webアプリ【kokoiine】を開発。',
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
      show: 'abc'
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



// import { createApp } from '@vue/runtime-dom'
////////////////////////////////////////////
import Chart from 'chart.js/auto';
let ctx = document.getElementById('chartLang');
let chartTitle = "フロントエンド";
let labels = ['HTML/CSS', 'JS', 'jQuery', 'Vue', 'WP',];
const chart1 = makeChart(ctx, chartTitle, labels, [3,2,3,1,2]);

ctx = document.getElementById('chartPp');
chartTitle = "バックエンド";
labels = ['PHP', 'Laravel', 'MySQL', ];
const chart2 = makeChart(ctx, chartTitle, labels, [3,3,3]);

ctx = document.getElementById('chartOo');
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
            max: 5,
          }
      },
      
    }
  });

  return myChart;
}



/////////////////
//form
import axios from 'axios';
let Form = {
  data(){
    return{
      form: {
        name: 'ppop',
        email: 'riris.lafih.music@gmail.com',
        comment: 'テスト送信',
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
        // alert('all ok')

        // const data = new FormData();
        const data = new URLSearchParams();
        data.append('name',form.name)
        data.append('email', form.email)
        data.append('comment', form.comment)
        const config = {
          headers: {
              'Access-Control-Allow-Origin': '*',
              'content-type': 'multipart/form-data'
          }
      }
        axios.post('/functions/email.php', data, config)
        .then(function(response){
          console.log(response)
        })
        .catch(function(error){
          console.log(error) 
        })
      }else{
        alert('no')
      }
       

      return true;
    }
  }
}

createApp(Form).mount('#vue-mail-form')

// const app = createApp
// app.component('todo-item',{
//   template: `<p>テンプレート</p>`
// })

// createApp(EventFor).mount('#v-work-box')
// app.mount('#eventfor')





// const TodoList = {
//   data() {
//     return {
//       groceryList: [
//         { id: 0, text: 'Vegetables' },
//         { id: 1, text: 'Cheese' },
//         { id: 2, text: 'Whatever else humans are supposed to eat' }
//       ]
//     }
//   }
// }

// const app2 = createApp(TodoList)

// app2.component('todo-item', {
//   props: ['todo'],
//   template: `<li>{{ todo.text }}</li>`
// })

// app2.mount('#todo-list-app')

