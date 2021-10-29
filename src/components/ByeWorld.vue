<template>
  <div class="hello">
    
    <input v-model="formulario.edad" type="text" placeholder="edad" />
    <input v-model="formulario.estatura" type="text" placeholder="estatura" />
    <button @click="sendData">Guardar</button>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "HelloWorld",
 
  created() {},
  methods: {
    sendData(){
      localStorage.setItem("data",JSON.stringify(this.formulario));
    }
  },
  computed: {
    ...mapState(["formulario"])
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
