<template>
  <div class="kontak">
      <!-- Navbar -->
      <Navbar/>
      <!-- End Navbar -->
      
      <div class="kontak-content">
          <div class="container mx-auto content">
              <div class="illustration">
                  <h1 class="font-bold">Contact Me</h1>
                  <img src="@/assets/frontend/images/call_me.webp" alt="">
              </div>
              <div class="form-email">
                  <div>
                    <input class="bg-white appearance-none border-2 mb-5 rounded-lg border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200 focus:border-blue-600 shadow-sm" id="inline-full-name" type="text" placeholder="Nama">
                  </div>

                  <div>
                    <input class="bg-white appearance-none border-2 mb-5 rounded-lg border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200 focus:border-blue-600 shadow-sm" id="inline-full-name" type="text" placeholder="Email">
                  </div>

                  <div>
                    <textarea
                      class="bg-white appearance-none border-2 mb-5 rounded-lg border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200 focus:border-blue-600 shadow-sm"
                      id="textarea-rows"
                      placeholder="Pesan"
                      rows="6"
                    ></textarea>
                  </div>

                  <button class="btn-submit">Submit</button>


              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
    name: 'Contact',
    components: {
        Navbar
    },
    head() {
        return {
            title: "Contact"
        };
    },
    mounted () {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
    }
}
</script>

<style lang="scss" scoped>
    @import 'assets/frontend/styles/utilities/_utilities';
    .kontak-content {
        background-image: url('~@/assets/frontend/images/background_contact.webp');
        background-size: cover;
        height: 100vh;
        background-position: top;
        background-repeat: no-repeat;
        
        .content {
            padding-top:10px;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            
            .illustration {
                h1 {
                    margin-top: -60px;
                    font-weight: bold;
                    color: $colorSecondary;
                    font-size: 30px;
                }
                img {
                    width: 600px;
                    height: 500px;
                }
            }
            .form-email {
                width: 500px;
                height: max-content;
                .name, .email {
                    padding: 3px;
                    width: 100%;
                    color: #3E3E3E;
                    font-size: 23px;
                    font-weight: 500;
                    border-radius: 10px;
                    box-shadow: -2px 3px 16px rgba(55, 84, 170,.15);
                    border: none;
                    margin-bottom: 25px !important;
                }
                .messages {
                    border-color: none;
                    padding: 3px;
                    width: 100%;
                    color: #3E3E3E;
                    font-weight: 500;
                    font-size: 23px;
                    border-radius: 10px;
                    box-shadow: -2px 3px 16px rgba(55, 84, 170,.15);
                    border: none;
                    margin-bottom: 25px;
                }
                ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                    color: #C1C1C1;
                    opacity: 1; /* Firefox */
                }
                .btn-submit {
                    background-color: $colorSecondary;
                    color: $colorPrimary;
                    border-radius: 10px;
                    font-size: 23px;
                    font-weight: bold;
                    padding: 5px 10px 5px 10px;
                    box-shadow: -2px 3px 16px rgba(55, 84, 170,.15);
                    border: none;
                    margin-bottom: 30px;
                    &:hover {
                        background-color: $colorLightBlue;
                        box-shadow: -1px 2px 13px rgba(55, 84, 170,.15);
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 768px) {
      .kontak-content {
        .content {
          padding-top:70px;
          flex-direction: column;
          .illustration {
            img {
                  width: 300px;
                  height: 250px;
            }
          }
          .form-email {
            width: 100%;
            .name, .email {
                    font-size: 18px;
                }
              .messages {
                  font-size: 18px;
              }
          }
        }
      }
    }
</style>