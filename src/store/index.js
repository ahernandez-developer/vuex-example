import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formulario:{
      nombre:"",
      apellido:"",
      edad:18,
      estatura:150
    }    
  },
  mutations: {
    cargarDatos(state,datos){
      state.formulario = datos;
    }
  },
  actions: {
    cargarDatosAccion({commit},datos){
      commit("cargarDatos",datos);
    }
  },
  modules: {
  }
})
