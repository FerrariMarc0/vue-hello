/* 'use strict'; */

const { createApp } = Vue

  createApp({
    data() {
      return {
        title: 'My first Vue',
        imgs: [],
        myClass: ['my_img', 'div_position', 'b_style', 'my_text'],
        message: '...'
      }
    },
    methods:{
      showImg(){
        this.imgs= ["img/01.jpg"];
        this.message= '...Prova a prendermi';
      }
    }
  }).mount('#app') 