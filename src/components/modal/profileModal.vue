<template>
  <div class="modalWrapper">
    <p>{{ error }}</p>
    <img class="modallogo" src="../../assets/LOGO.svg" alt="ink" />
    <div class="inputDiv">
      <input
        class="inputStyle"
        v-bind:placeholder="$t('ProfileModal.age')"
        v-model="profileDTO.age"
      />
    </div>
    <div class="inputDiv">
      <textarea
        class="inputStyleTextArea"
        v-bind:placeholder="$t('ProfileModal.bio')"
        maxlength="300"
        v-model="profileDTO.bio"
      />
    </div>
    <div class="inputDiv">
      <div v-if="!profileDTO.photo" class="selectedPhoto">
        <h2>{{ $t("ProfileModal.photo") }}</h2>

        <input
          type="file"
          class="custom-file-input"
          v-bind:placeholder="$t('ProfileModal.photo')"
          @change="onFileChange($event)"
        />
      </div>
      <div v-else>
        <div class="selectedPhoto">
          <img :src="this.profileDTO.photo" class="photoDisplay" />
          <button class="submit" @click="removeImage()">
            {{ $t("ProfileModal.delete") }}
          </button>
        </div>
      </div>
    </div>
    <div class="flexbox">
      <button class="submit" @click="postProfile">Submit</button>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { ProfileDTO } from "@/models/dto/profile.dto";
  import { ProfileService } from "@/services/ProfileService";
  import { AuthVM } from "@/models/viewmodel/auth.viewmodel";

  @Component({ components: {} })
  export default class ProfileModal extends Vue {
    private error: any = "";
    private profileDTO: ProfileDTO = {
      age: null,
      bio: "",
      photo: "",
      token: this.$store.getters.getUser.token,
    };

    postProfile() {
      ProfileService.postProfile(this.profileDTO)
        .then((res) => {
          const user: AuthVM = this.$store.getters.getUser;
          user.profile = res;
          this.$store.dispatch("saveUser", user);
          this.$emit("close");
        })
        .catch((err) => {
          this.error = err;
        });
    }

    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    }

    createImage(file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.profileDTO.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    removeImage() {
      this.profileDTO.photo = null;
    }
  }
</script>

<style>
  .selectedPhoto {
    flex-direction: row;
    text-align: center;
  }
  .inputStyleTextArea {
    height: 4em;
    outline: black;
    border: black;
    width: 20em;
    font-family: Scribble;
    text-align: center;
    font-size: 25px;
  }

  .photoDisplay {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .modalWrapper {
    margin: auto;
    width: 35em;
    display: flex;
    flex-direction: column;
  }
  .modallogo {
    margin-top: auto;
    transform: scale(0.6);
  }
  .inputStyle {
    height: 2em;
    outline: none;
    border: none;
    width: 20em;
    font-family: Scribble;
    text-align: center;
    font-size: 25px;
  }
  .inputDiv {
    margin: 0 0 1em 0;
    border-bottom: 0.5em solid black;
  }

  .submit {
    text-align: center;
    background-color: #f8bd3f;
    font-size: 25px;
    border-radius: 1em;
    width: 8em;
    height: 2em;
    font-family: Scribble;
    margin: 0 0 1em 0;
  }

  .custom-file-input {
    color: transparent;
  }
  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }
  .custom-file-input::before {
    content: "upload";
    color: black;
    display: inline-block;
    background: #f8bd3f;
    border: 2px solid black;
    border-radius: 1em;
    cursor: pointer;
    text-align: center;
    font-size: 25px;
    width: 8em;
    height: 1.8em;
    font-family: Scribble;
    margin: 0 0 1em 0;
  }
</style>
