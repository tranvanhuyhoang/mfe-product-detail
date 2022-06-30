<template>
  <div id="container-product-detail">
    <div class="pre-style show-store-detail-layout">
      Detail's Store: {{
        JSON.stringify(store.state, null, 4)
      }}
    </div>
     <div class="column-1">
       <h1 class="title">The Model Store</h1>
       <img class="img-custom" alt="1" :src="getThumbImgUrl(variantActive.image)">
     </div>
     <div id="column-2" class="column-2">
      <div id="product-cart"></div>
      <div class="wrap-content-detail">
      <div class="top-content">
        <div class="name-product">{{variantActive.name}}</div>
      </div>
      <div class="bottom-content">
        <div class="container-thumnail">
          <img 
          v-for="item in this.variants" 
          alt="item.sku" 
          :class="[item.sku === variantActive.sku ? 'active-img-thumb' : '', 'img-thumb-custom']" 
          :src="getThumbImgUrl(item.thumb)" 
          :key="item.sku"
          @click="selectVariant(item)"
          >
        </div>
      </div>
      </div>
     </div>
  </div>
</template>

<script>
  const variants = [
      {
        sku: 't_porsche',
        color: 'red',
        name: 'Porsche-Diesel Master 419',
        image: 'images/tractor-red.jpg',
        thumb: 'images/tractor-red-thumb.jpg',
        price: '66,00 $',
      },
      {
        sku: 't_fendt',
        color: 'green',
        name: 'Fendt F20 Dieselroß',
        image: 'images/tractor-green.jpg',
        thumb: 'images/tractor-green-thumb.jpg',
        price: '54,00 $',
      },
      {
        sku: 't_eicher',
        color: 'blue',
        name: 'Eicher Diesel 215/16',
        image: 'images/tractor-blue.jpg',
        thumb: 'images/tractor-blue-thumb.jpg',
        price: '58,00 $',
      },
  ]
export default {
    props: ['store'],
    data: () => ({
      newTask: '',
      variants,
      name: 'Tractor',
      variantActive: variants[0]
    }),
    methods: {
      selectVariant(variant){
        this.variantActive = variant;
        this.store.dispatch('setSku', variant.sku);
      },
      getThumbImgUrl: function (imagePath) {
        return require('@/assets/' + imagePath);
      }
    }
}
</script>

<style>
#container-product-detail{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}

.show-store-detail-layout{
  position: absolute;
  left: 5px;
  bottom: 5px;
  color: #f96b00;
  text-align: start;
}

.wrap-content-detail {
  position: absolute;
  top: 100px;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.column-1{
  display: table-cell;
  width: 50%;
}

.column-1 .title{
  padding: 12px;
  margin: 0px;
}

.column-2{
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.column-2 .top-content{
  height: 30%;
  display: flex;
  flex-direction: column;
}

.column-2 #product-cart{
  margin-top: 20px;
}

.column-2 .top-content .container-cart{
  text-align: end;
}

.column-2 .top-content .name-product{
  font-size: 23px;
  margin: auto 65px 0 65px;
}

.column-2 .bottom-content{
  text-align: center;
}

.column-2 .bottom-content .container-thumnail{
  margin-left: 55px;
}

.column-2 .img-thumb-custom{
  cursor: pointer;
  margin: 0 2px;
  border-bottom: 2px solid #fff;
}


.column-2 .active-img-thumb{
  border-color: green;
}


.column-2 .img-thumb-custom:hover{
  cursor: pointer;
  border-color: green;
}

</style>
