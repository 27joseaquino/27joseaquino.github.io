<template>
  <q-layout>
    <q-header reveal :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
        <q-toolbar>        
          <q-toolbar-title :bcolor = "color" style="font-size: 20px;">{<span style="color: white">Dev-Matheus</span>}</q-toolbar-title>
            <div class="justify-between "> <q-btn label="My" no-caps class="color-blue underline-btn" @click.prevent="scrollToSection('my')" />
              <q-btn label="Technologies" no-caps class="color-blue underline-btn" @click.prevent="scrollToSection('technologies')"  />
              <q-btn label="Submit" no-caps class="color-blue underline-btn" @click="scrollToSection('submit')"  />
            </div>         
        </q-toolbar>
      </q-header>
    <q-page class="row"  :style="{ backgroundColor: color, justifyContent: 'space-between', alignItems: 'center' }">
     
      <div class="row q-pl-xl">       
        <div class="justify-around">
             <div class="luz" /> 
            <div class="text-h5 text-white q-mb-md" style="font-family: Noto">
              H e l l o W o r l d !!
            </div>
            <div class="text-h2 text-white" style="font-family: Yeseva">
              I'M Matheus
              <br>
              <text class="dev q-pl-md" style="letter-spacing: 2px;">f r o n t e n d D e v e l o p e r
              </text>
            </div>
            <div class="q-mt-xl">
              <q-btn @click="downloadPDF" class="bg-white" icon-right="download" style=" font-family: 'Source';">Dowload CV</q-btn>
            <div><q-toggle
      v-model="value"
      @click="isToggle(value)"
      color="white"
    /></div>
            </div>
          
        </div>     
      </div>
      <div class="" style=" display: flex; justify-content: end;">
        
          <div style=" width: 97%; " >
            <img  src="../assets/myphoto2.svg"  style="display: flex;  max-width: 100%;height: auto;" />
          </div>
        
      </div>

   <div>
    <section ref="submit" >
    <h3 style="color: white">Envie sua proposta de trabalho</h3>
        <q-form @submit="onSubmit" @reset="onReset" ref="form">
      <!-- Campo de Texto com Validação -->
  
      <q-input  v-model="form.name" :rules="[validaNome]"
        lazy-rules
        required color="grey-3" label-color="white" outlined  label="Nome">
      
      </q-input>
      <!-- Campo de E-mail com Validação -->
      <q-input
        v-model="form.email"
        type="email"
        label="Email"
        filled
         color="grey-3" label-color="white" outlined 
        :rules="[validaEmail]"
        lazy-rules
        required
      />

      <!-- Campo de Senha com Validação -->
      <q-input
        v-model="form.password"
        type="password"
        label="Senha"
        filled
        :rules="[validaSenha]"
        lazy-rules
        required color="grey-3" label-color="white" outlined  
      />

      <!-- Botões de Ação -->
      <div class="q-mt-md">
        <q-btn label="Enviar" type="submit" color="primary" />
        <q-btn label="Resetar" type="reset" color="secondary" flat />
      </div>
        </q-form>
    </section>
</div>

 
  <div class="column"> 
    <section ref="technologies" >
    <div class="text-h3 text-white q-mb-md" style="font-family: Noto">
              T E C N O L O G I A S
    </div>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="primary"
      class="rounded-borders"
      style="  max-width: 40%;height: auto;"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <img  src="../assets/vue.png"  style="  max-width: 70%;height: auto;" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <img  src="../assets/JS.png"  style="  max-width: 10%;height: auto;" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <img  src="../assets/react.png"  style="  max-width: 50%;height: auto;" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <img  src="../assets/Sass.png"  style="  max-width: 20%;height: auto;" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="row justify-center">
      <q-btn-toggle
        glossy
        v-model="slide"
        :options="[
          { label: 1, value: 'style' },
          { label: 2, value: 'tv' },
          { label: 3, value: 'layers' },
          { label: 4, value: 'map' }
        ]"
      />
    </div>
   </section>
  </div>


    </q-page>
  </q-layout>
</template>

<script setup>
import {ref} from 'vue'
const value = ref(false);
const color = ref('black');
const form = ref( {
        name: '',
        email: '',
        password: ''
      })
const  slide= ref('style');

const refs = {
  my: ref(null),
  technologies: ref(null),
  submit: ref(null),
};
      
const scrollToSection = (sectionName) => {
  const section = refs[sectionName].value;
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth', // Faz o scroll suave
    });
  }
};

const validaNome = (val)=> {
      if (!val || val.length < 3) {
        return 'O nome deve ter pelo menos 3 caracteres';
      }
      return true;
    }
    // Função de Validação de E-mail
   const validaEmail =(val) => {
      const emailPattern =
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (!val || !emailPattern.test(val)) {
        return 'Insira um e-mail válido';
      }
      return true;
    }
    // Função de Validação de Senha
   const validaSenha=(val)=> {
      if (!val || val.length < 6) {
        return 'A senha deve ter pelo menos 6 caracteres';
      }
      return true;
    }
    // Função de Submissão
    const onSubmit = () =>  {
      if (this.$refs.form.validate()) {
        // O formulário é válido, prossiga com o envio dos dados
        console.log('Formulário enviado', this.form);
      }
    }
    // Função de Reset
   const onReset = () => {
      this.$refs.form.resetValidation();
      this.form.name = '';
      this.form.email = '';
      this.form.password = '';
    }
const isToggle = (value) => { 
  console.log(color.value);
  if(value){
    color.value = 'green'
  }
  else{
    color.value = 'black'
  }
 
}


const  downloadPDF = () => {
  const pdfUrl = 'https://www.canva.com/design/DAFzz2B50Vk/FrlZPnZ6eflraSZ-JiRZZg/edit';  // Substitua pelo URL do seu PDF
      window.open(pdfUrl, '_blank');
}

</script>
<style scoped>
@font-face {
  font-family: "Noto";
  src: url("../assets/Fonts/NotoSerif-Regular.ttf");
}
@font-face {
  font-family: "Yeseva";
  src: url("../assets/Fonts/YesevaOne-Regular.ttf");
}
@font-face {
  font-family: "Source";
  src: url("../assets/Fonts/SourceCodePro-Italic-VariableFont_wght.ttf");
}
.luz {
  position: absolute;
  width: 810px;
  height: 323px;
  left: calc(50% - 810px / 2 - 368px);
  top: 245px;

  background: #1238ff;
  opacity: 0.2;
  filter: blur(118.028px);
}
/* F r o n t e n d D e v e l o p e r */
.underline-btn {
  position: relative;
  color: white; /* Cor do texto */
}
.underline-btn::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px; /* Espessura do sublinhado */
  background-color: blue; /* Cor do sublinhado */

  left: 0;
  bottom: 0;
}
.input-branco input {
  background-color: white !important; /* Define o fundo dos inputs como branco */
  color: black; /* Define a cor do texto como preto */
}

.input-branco .q-field__label {
  color: white !important; /* Define a cor dos labels como branco */
}
.dev {
  

  font-family: "Noto Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;

  color: #1c69ff;
}
</style>
