<template>
  <div class="hello">

    <input v-model="formulario.nombre" type="text" placeholder="Nombre" />
    
    <input v-model="formulario.apellido" type="text" placeholder="Apellido" />
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex";
export default {
  name: "HelloWorld",
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions(["cargarDatosAccion"]),
    fetchData(){
      let data = localStorage.getItem("data");
      console.log(data);
      

      this.cargarDatosAccion(JSON.parse(data));
      
    }
  },
  computed:{
    ...mapState(["formulario"])
  }
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
