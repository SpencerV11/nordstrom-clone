<template>
  <div>
    <header class='free-shipping'>Free shipping. Free returns. All the time. <span>See details.</span></header>
    <header class='nordstrom'>

    </header>
    <div class='white-space'></div>
  </div>
</template>
<style lang="scss">
$white: rgb(241, 241, 241);
$black: rgb(0, 0, 0);
//SASS INHERITANCE
    %flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .free-shipping {
        @extend %flex-center;
        margin-top: .05rem;
        color: $white;
        width: 100%;
        height: 4.5vh;
        background: $black;
        font-size: .72rem;
        font-weight: 600;

        span {
            margin-left: .3rem;
            border-bottom: 1px solid $white;
            line-height: .9rem;
        }
    }

    .nordstrom {
        width: 100%;
        height: 12vh;
        border: 1px solid black;
    }


</style>