<template>
  <div class="flex-column">
    <header class="free-shipping">
      Free shipping. Free returns. All the time.
      <span>See details.</span>
    </header>
    <header class="nordstrom">
      <img src="./assets/Nordstrom.png">
      <div class="search-signup">
        <img class="search-icon" src="https://img.icons8.com/ios/1000/000000/search.png">
        <div class="search">Search</div>
        <div>Sign In</div>
        <img class="down-arrow" src="https://img.icons8.com/windows/32/000000/expand-arrow.png">
        <img class="lock" src="https://img.icons8.com/ios/1000/000000/lock.png">
      </div>
    </header>
    <header class="link-header">
      <a>Designer</a>
      <a>Women</a>
      <a>Men</a>
      <a>Kids</a>
      <a>Home & Gifts</a>
      <a>Beauty</a>
      <a>Sale</a>
      <a>What's Now</a>
    </header>
    <div class="banner-container">
      <img
        class="banner"
        src="https://n.nordstrommedia.com/id/86e06126-ba09-42b8-8abf-6f1c1b4c3ac8.gif?w=1609&h=200"
      >
      <div class="banner-sale">
        <p class="get-a-bonus">Get a $60 Bonus Note (Yay!) Now Through July 10</p>
        <p class="limited-time">
          Don't miss this limited-time offer for new Nordstrom credit cardmembers. Restrictions apply.
          <span>Apply Now</span>
        </p>
      </div>
    </div>
    <div class='carousel-box'></div>
    <div class="white-space"></div>
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

%flex-between {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

%flex-evenly {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.free-shipping {
  @extend %flex-center;
  margin-top: 0.05rem;
  color: $white;
  width: 100%;
  height: 4.5vh;
  background: $black;
  font-size: 0.72rem;
  font-weight: 600;

  span {
    margin-left: 0.3rem;
    border-bottom: 1px solid $white;
    line-height: 0.9rem;
  }
}

.nordstrom {
  width: 98%;
  height: 10.5vh;
  @extend %flex-between;

  img {
    width: 14rem;
  }

  .search-icon {
    width: 1.4rem;
  }

  .lock {
    width: 1.8rem;
    margin-right: 0.5rem;
  }

  .down-arrow {
    width: 0.8rem;
    margin-right: 1.5rem;
  }

  .icon {
    color: $black;
  }
}

.white-space {
  width: 100%;
  height: 200vh;
}

.search-signup {
  margin-bottom: 0.6rem;
  @extend %flex-center;
  font-weight: 300;
  font-size: 0.9rem;

  .search {
    margin-right: 1.5rem;
  }
}

.link-header {
  @extend %flex-evenly;
  width: 96%;
  height: 9vh;
  font-size: 0.9rem;
}

.banner-container {
  width: 95%;
  position: relative;

  .banner-sale {
    position: absolute;
    top: 20%;
    left: 23%;
  }

  .banner {
    width: 100%;
    height: 25vh;
    background: $black;
  }

  .get-a-bonus {
      font-size: 1.7rem;
      line-height: 3rem;
  }

  .limited-time {
      font-size: .9rem;
  }

  span {
      border-bottom: 1px solid $black;
  }
}

.carousel-box {
  background-image: url('./assets/banner.jpg');
  background-size: cover;
  margin-top: 1.5rem;
  width: 95%;
  height: 75vh;
  animation: slide 9s infinite;
}

@keyframes slide {
  0% { background-image: url('./assets/banner.jpg')}
  35% { background-image: url('./assets/banner.jpg')}
  75% { background-image: url('./assets/banner2.jpg')}
  85% { background-image: url('./assets/banner2.jpg')}
  95% { background-image: url('./assets/banner2.jpg')}
}



.nordstrom img, .search-signup, .search, .lock, .link-header a, .banner:hover {
    cursor: pointer;
}

.limited-time span:hover {
    cursor: pointer;
    border-bottom: 2px solid $black
}
</style>