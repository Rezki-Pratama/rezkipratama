<template>
  <div class="footer">
      <div class="container mx-auto md:px-20 content">
          <h1>LETS TALK</h1>
          <div class="social-media">
              <ul>
                  <li>
                    <a target="_blank" href="https://telegram.me/RezkiPratama6">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fab fa-telegram"></span>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=6285266990656">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fab fa-whatsapp"></span>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://m.me/RezkiPratama6">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fab fa-facebook-messenger"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span class="fab fa-discord"></span>
                    </a>
                  </li>
              </ul>
          </div>
          <h2>© Copyright 2020 Rezki Pratama </h2>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Footer'

}
</script>

<style lang="scss" scoped>

    @import 'assets/frontend/styles/utilities/_utilities';

    .footer {
        background-size: cover;
        background-position: bottom;
        background-repeat: no-repeat;
        height: max-content;
        .content {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            height: 100%;

            .social-media ul {
                width: 100%;
                margin: 0;
                padding: 0;
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                li {
                    position: relative;
                    list-style: none;
                    border-radius: 10px;
                    width: 60px;
                    height: 60px;
                    margin: 0 30px;
                    transform: rotate(-30deg) skew(25deg);
                    background: #ccc;

                    span {
                        border-radius: 10px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background:$colorSecondary;
                        transition: 0.5s;
                        display: flex !important;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                        font-size: 40px;
                    }

                    &:hover span {
                        &:nth-child(5) {
                            transform: translate(40px, -40px);
                            opacity: 1;
                            }
    
                            &:nth-child(4) {
                                transform: translate(30px, -30px);
                                opacity: .8;
                            }
    
                            &:nth-child(3) {
                                transform: translate(20px, -20px);
                                opacity: .6;
                            }
    
                            &:nth-child(2) {
                                transform: translate(10px, -10px);
                                opacity: .4;
                            }
    
                            &:nth-child(1) {
                                transform: translate(0, 0);
                                opacity: .2;
                            }
                            
                    }
                    
                }
            }

            h1 {
                font-weight: bold;
                font-size: 30px;
                color: $colorSecondary;
                margin: 100px 0;
            }

            h2 {
                margin-top: 100px;
                font-weight: bold;
                font-size: 20px;
                color: $colorSecondary;
            }
        }
    }

    @media only screen and (min-device-width : 360px) and (max-device-width : 640px) {
        .footer {
            .content {
                .social-media ul {
                    li {
                        margin: 0 10px;
                        width: 40px;
                        height: 40px;

                        span {
                            font-size: 25px;
                        }
                    }
                }

                h1 {
                    font-weight: bold;
                    font-size: 30px;
                    color: $colorSecondary;
                    margin: 100px 0;
                }

                h2 {
                    margin-top: 100px;
                    font-weight: bold;
                    font-size: 15px;
                    color: $colorSecondary;
                }
            }
        }
    }
</style>