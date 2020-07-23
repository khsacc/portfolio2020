<template>
  <transition name="loading__transition">
    <div class="loading__container ">
      <div class="loading__clock" />
      Welcome!
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LoadingAnimation extends Vue {
}
</script>

<style lang="scss" scoped>
.loading{
  &__container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    // gradation was exported from Adobe Illustrator
    background : -moz-linear-gradient(57.5% -17.21% -102deg,rgba(217, 151, 141, 1) 0%,rgba(208, 144, 138, 1) 2.17%,rgba(159, 106, 124, 1) 15.33%,rgba(117, 74, 112, 1) 28.82%,rgba(83, 47, 102, 1) 42.44%,rgba(56, 26, 95, 1) 56.22%,rgba(37, 12, 89, 1) 70.24%,rgba(26, 3, 86, 1) 84.64%,rgba(22, 0, 85, 1) 100%);
    background : -webkit-linear-gradient(-102deg, rgba(217, 151, 141, 1) 0%, rgba(208, 144, 138, 1) 2.17%, rgba(159, 106, 124, 1) 15.33%, rgba(117, 74, 112, 1) 28.82%, rgba(83, 47, 102, 1) 42.44%, rgba(56, 26, 95, 1) 56.22%, rgba(37, 12, 89, 1) 70.24%, rgba(26, 3, 86, 1) 84.64%, rgba(22, 0, 85, 1) 100%);
    background : -webkit-gradient(linear,57.5% -17.21% ,42.5% 117.21% ,color-stop(0,rgba(217, 151, 141, 1) ),color-stop(0.0217,rgba(208, 144, 138, 1) ),color-stop(0.1533,rgba(159, 106, 124, 1) ),color-stop(0.2882,rgba(117, 74, 112, 1) ),color-stop(0.4244,rgba(83, 47, 102, 1) ),color-stop(0.5622,rgba(56, 26, 95, 1) ),color-stop(0.7024,rgba(37, 12, 89, 1) ),color-stop(0.8464,rgba(26, 3, 86, 1) ),color-stop(1,rgba(22, 0, 85, 1) ));
    background : -o-linear-gradient(-102deg, rgba(217, 151, 141, 1) 0%, rgba(208, 144, 138, 1) 2.17%, rgba(159, 106, 124, 1) 15.33%, rgba(117, 74, 112, 1) 28.82%, rgba(83, 47, 102, 1) 42.44%, rgba(56, 26, 95, 1) 56.22%, rgba(37, 12, 89, 1) 70.24%, rgba(26, 3, 86, 1) 84.64%, rgba(22, 0, 85, 1) 100%);
    background : -ms-linear-gradient(-102deg, rgba(217, 151, 141, 1) 0%, rgba(208, 144, 138, 1) 2.17%, rgba(159, 106, 124, 1) 15.33%, rgba(117, 74, 112, 1) 28.82%, rgba(83, 47, 102, 1) 42.44%, rgba(56, 26, 95, 1) 56.22%, rgba(37, 12, 89, 1) 70.24%, rgba(26, 3, 86, 1) 84.64%, rgba(22, 0, 85, 1) 100%);
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#D9978D', endColorstr='#160055' ,GradientType=0)";
    background : linear-gradient(192deg, rgba(217, 151, 141, 1) 0%, rgba(208, 144, 138, 1) 2.17%, rgba(159, 106, 124, 1) 15.33%, rgba(117, 74, 112, 1) 28.82%, rgba(83, 47, 102, 1) 42.44%, rgba(56, 26, 95, 1) 56.22%, rgba(37, 12, 89, 1) 70.24%, rgba(26, 3, 86, 1) 84.64%, rgba(22, 0, 85, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#D9978D',endColorstr='#160055' , GradientType=1);

    @include z-index(loading__animation)
  }

  &__clock {
    // border-color:#fde9c3 transparent transparent;
    width: 10vw;
    height: 10vw;
    position: relative;
    margin-bottom: 5vh;

    &::before,
    &::after{
      content:'';
      position:absolute;
      top:0;
      left:0;
      width:50%;
      height:50%;
      opacity:0.85;
    }
    &::before{
      transform-origin:right bottom;
      border-right:2px solid #fde9c3;
      animation:longhand .4s infinite linear forwards;
      transform: translateY(1.5px);
    }

    &::after{
      transform-origin:calc(100% - 2px) bottom;
      border-right:3px solid #fde9c3;
      animation:shorthand 1.5s infinite linear forwards;
    }
  }

  &__transition {
    &-leave-active {
      transition: 1s ease-in-out;
    }

    &-leave-to {
      opacity: 0;
    }
  }
}

@keyframes longhand{
  0%{
    transform:rotate(0deg);
  }
  100%{
    transform:rotate(360deg);
  }
}

@keyframes shorthand{
  0%{
    transform:translateX(1.5px) translateZ(0) rotate(0deg);
  }
  100%{
    transform:translateX(1.5px) translateZ(0) rotate(360deg);
  }
}
</style>
