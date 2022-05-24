<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Información
    
    p La información es un tema de alto interés en el contexto empresarial, ya que es la base para tomar decisiones. Sin embargo, se debe mencionar primero el concepto de <b>“datos”</b> porque estos son los que posibilitan la existencia de la información.
    p.mb-5 Los datos son números, cifras, incluso palabras, que están almacenados en algún repositorio. En términos técnicos, son la representación de una variable cuantitativa (números) o cualitativa (cualidades o características). Teniendo presente lo referenciado, se puede afirmar que la información es un conjunto de datos con contexto o significado. A modo de ejemplo, se tiene los siguientes casos:

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Tabla 1
      span Ejemplo dato - información
    .row.justify-center.mb-5(data-aos="fade-up")
      .col-12.col-lg-7
        .tabla-a.color-acento-contenido.mb-5 
          .tabla-b__header
            h5.mb-0 Ejemplos con la relación entre dato e información
          table
            thead
              tr
                th.colr.w-200px Dato
                th.colr Información
            tbody
              tr
                th $200.000
                td.p-4 El precio de un par de tenis en el punto de venta es de $200.000.
              tr
                th 16
                td.p-4 El día de hoy se vendieron 16 pares de tenis.
              tr
                th 12
                td.p-4 El fin de semana el punto de venta esta  rá abierto durante 12 horas.
              tr
                th Servicial
                td.p-4 María Valentina es la agente de atención al cliente más servicial.

    p.mb-5 En la tabla anterior se observa la relación entre ambos conceptos. Por una parte se cuentan con cuatro datos, tres de ellos cuantitativos ($200.000, 16 y 12) y uno de ellos cualitativo (Servicial). En este sentido, el usuario de la información solo tiene esa visualización sin mayor contexto. Cuando se toman estos datos y se les da un alcance o se asocian a una situación se identifica la importancia de cada dato y se pasa ahora a hacer mención de información.

    .row.justify-center.mb-5(data-aos="fade-up") 
      .col-12.col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__texto.p-4.posit_1
            p En el contexto de la atención al cliente la información es vital, dado que es lo que motiva la interacción y el interés entre:
            br
            br
            span <b>Emisor</b> - quien emite el mensaje comunicacional, generalmente, es el Agente de Servicio
            br
            br
            span <b>Receptor</b> (quien recibe la información, usualmente el cliente).
          .bloque-texto-g__img.posit_2(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/t1-1.png')})`}")

    p.mb-5 La información a nivel empresarial debe contar con las siguientes características:

    figure.mb-5
      img(src='@/assets/curso/tema1/t1-2.svg', alt='Texto que describa la imagen')

    h3.mb-3 Tipos de información

    p.mb-5 Existen diferentes tipos de información, los cuales se pueden clasificar desde diferentes perspectivas, según su: fuente, el objeto comunicacional, criterios de programación en sistemas, entre otros; sin embargo, la clasificación más referenciada a nivel empresarial es la asociada con la relación que existe entre quien la produce/ pública (emisor) y los potenciales usuarios requirentes (receptores), esta clasificación se muestra a continuación:

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Información confidencial")
        .row.align-items-center.p-4
          .col-12.col-lg-3.align-items-center.mb-3.mb-lg-0
            figure.justify-center
              img.img140(src='@/assets/curso/tema1/t1-3.svg', alt='Texto que describa la imagen')
          .col-12.col-lg-9    
            h4 Información confidencial
            p.mb-0 Corresponde a aquella información que dado su nivel de seguridad, peligrosidad o exclusividad solo puede ser consultada por ciertas personas con accesos específicos al repositorio donde se encuentra alojada.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Información pública")
        .row.align-items-center.p-4
          .col-12.col-lg-3.align-items-center.mb-3.mb-lg-0
            figure.justify-center
              img.img140(src='@/assets/curso/tema1/t1-4.svg', alt='Texto que describa la imagen')
          .col-12.col-lg-9    
            h4 Información pública
            p.mb-0 Es la información que está publicada para que sea consultada y utilizada por quién considere le puede ser de utilidad.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Información personal")
        .row.align-items-center.p-4
          .col-12.col-lg-3.align-items-center.mb-3.mb-lg-0
            figure.justify-center
              img.img140(src='@/assets/curso/tema1/t1-5.svg', alt='Texto que describa la imagen')
          .col-12.col-lg-9    
            h4 Información personal
            p.mb-0 Es la información que está asociada y es de propiedad de cada individuo. En este sentido, es responsabilidad de la persona decidir con quién se compartirá y definir con qué fines se podrá utilizar.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Información externa")
        .row.align-items-center.p-4
          .col-12.col-lg-3.align-items-center.mb-3.mb-lg-0
            figure.justify-center
              img.img140(src='@/assets/curso/tema1/t1-6.svg', alt='Texto que describa la imagen')
          .col-12.col-lg-9    
            h4 Información externa
            p.mb-0 Es un tipo de información que ha sido creada para ser divulgada y consultada por personas/entes por fuera de la organización/entidad que la produjo. No obstante, quién construye la información define cuál debe ser su uso.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Información interna")
        .row.align-items-center.p-4
          .col-12.col-lg-3.align-items-center.mb-3.mb-lg-0
            figure.justify-center
              img.img140(src='@/assets/curso/tema1/t1-7.svg', alt='Texto que describa la imagen')
          .col-12.col-lg-9    
            h4 Información interna
            p.mb-0 Es aquella que es utilizada por un grupo específico de personas, usualmente pertenecientes a una misma empresa. Se caracteriza porque suele ser de interés solo por parte de un determinado conjunto de personas.
    
    .row
      .col-12.col-lg-6.bgr.p-4.p-lg-5
        p La mala aplicación de los tipos de información puede llevar a las empresas a la desinformación a nivel digital; conocida como <em>fake news</em> (noticias falsas), son un riesgo latente para las organizaciones que generan y consumen información de forma constante.
        p Muchas empresas implementan <b>políticas de buenas prácticas de sistemas de gestión</b>. Incluso, procesos de gestión documental para que la información que se origina en la empresa sea producida, usada y custodiada (guardada) bajo parámetros de calidad y confiabilidad.
      .col-12.col-lg-6.bgr_1
        figure
          img.d-flex.d-lg-none(src='@/assets/curso/tema1/t1-8.png', alt='Texto que describa la imagen')
     








</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
