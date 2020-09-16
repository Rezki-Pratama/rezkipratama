<template>
  <div class="main">
    <nav>
        <div class="logo">
          <img src="@/assets/frontend/images/rezkipratama.png" alt="">
        </div>
        <div class="nav-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Home</a></li>
          </ul>
        </div>
    </nav>
    <div class="information">
      <div class="overlay"></div>
      <img src="@/assets/frontend/images/rezkipratama.png" class="avatar" alt="">
      <div id="circle" ref="circle">
          <div class="feature one">
            <i class="fas fa-address-card"></i>
            <div class="description">
              <h1>Rezki Pratama</h1>
              <p>Mobile Developer, Web Designer, <br>
                dan UI Designer</p>
            </div>
          </div>
          <div class="feature two">
            <i class="fas fa-address-card"></i>
            <div class="description">
              <h1>Skill</h1>
              <p>Mengelabui anak orang</p>
            </div>
          </div>
          <div class="feature three">
            <i class="fas fa-address-card"></i>
            <div class="description">
              <h1>Skill</h1>
              <p>Mengelabui anak orang</p>
            </div>
          </div>
          <div class="feature four">
            <i class="fas fa-address-card"></i>
            <div class="description">
              <h1>Skill</h1>
              <p>Mengelabui anak orang</p>
            </div>
          </div>
      </div>
    </div>
    <div class="controls">
      <i class="fas fa-chevron-circle-up" id="btnUp" ref="btnUp"></i>
      <h3>Features</h3>
      <i class="fas fa-chevron-circle-up" id="btnDown" ref="btnDown"></i>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const circle = this.$refs.circle;
    const btnUp = this.$refs.btnUp;
    const btnDown = this.$refs.btnDown;

    let rotateValue = circle.style.transform;
    let rotateSum;

    btnUp.onclick = function () {
      rotateSum = rotateValue + "rotate(-90deg)";
      circle.style.transform = rotateSum;
      rotateValue = rotateSum;
    }

    btnDown.onclick = function () {
      rotateSum = rotateValue + "rotate(90deg)";
      circle.style.transform = rotateSum;
      rotateValue = rotateSum;
    }
  },
}
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: linear-gradient(to right, #1076a1, #58AEE6);

    nav {
      width: 80%;
      position: sticky;
      margin: 20px auto;
      z-index: 1;
      display: flex;
      align-items: center;

      .logo {
        flex-basis: 20%;
        
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }

      .nav-links {
        flex: 1;
        text-align: right;

        ul li {
          list-style: none;
          display: inline-block;
          margin: 0 20px;

          a {
            color: #FFF;
            font-weight: bold;
            text-decoration: none;
          }
        }
      }

    }

    .information {
      width: 1500px;
      height: 1000px;
      position: absolute;
      top: 50%;
      left: -10%;
      transform: translateY(-50%);

      .overlay {
        width: 0;
        height: 0;
        border-top: 500px solid #FFF;
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
        border-right: 500px solid transparent;
        border-left: 500px solid #FFF;
        border-bottom: 500px solid #FFF;
        position: absolute;
        left: 10%;
        top: 0;
      }

      .avatar {
        width: 200px;
        position: absolute;
        border-radius: 50%;
        top: 45%;
        left: 37%;
        transform: translateY(-50px);
        z-index: 1;
      }

      .feature {
        position: absolute;
        display: flex;
        align-items: center;
        color: #FFF;
        i {
          font-size: 90px;
          color: #FFF;
        }

        .description {
          margin-left: 20px;

          h1 {
            font-weight: bold;
            font-size: 30px;
          }

          p {
            margin-top: 8px;
          }
        }
      }

      .one {
        top: 450px;
        right: 0px;
      }
      .two {
        top: 150px;
        left: 350px;
        transform: rotate(-90deg);
      }
      .three {
        bottom: 450px;
        left: 50px;
        transform: rotate(-180deg);
      }
      .four {
        bottom: 150px;
        right: 350px;
        transform: rotate(-270deg);
      }
    }

    #circle {
      width: 1000px;
      height: 1000px;
      position: absolute;
      top: 0;
      left: 15%;
      border-radius: 50%;
      transform: rotate(0deg);
      transition: 1s;
      // background: #ccc;
    }

    .controls {
      position: absolute;
      right: 10%;
      top: 50%;
      align-items: center;
      text-align: center;
      transform: translateY(-50%);

      h3 {
        font-size: 30px;
        font-weight: bold;
        color: #FFF;
        margin-bottom: 10px;
      }

      #btnUp {
        cursor: pointer;
        color: #FFF;
        font-size: 30px;
      }

      #btnDown {
        cursor: pointer;
        color: #FFF;
        font-size: 30px;
        transform: rotate(180deg);
      }
    }
  }
</style>
