<template>
  <div class="flexBoxVerificatiePage">
    <VerificationTitle />
    <div class="verificationText">
      <h3>
        It seems like your account is still pending. We've send you an email to
        activate your account. Please follow the instruction.<br /><br />
        If you didn't recieve an email please hit the button below to resend it.
      </h3>
    </div>
    <div>{{ error }}</div>
    <VerificationButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VerificationTitle from "@/components/verification/VerificationTitle.vue";
import VerificationButton from "@/components/verification/VerificationButton.vue";
import { AuthService } from "@/services/AuthService";
import { VerifyDTO } from "@/models/dto/verify.dto";

@Component({
  components: { VerificationTitle, VerificationButton },
  created() {
    this.checkVerification();
  }
})
export default class Verification extends Vue {
  private error = "";
  checkVerification() {
    const queryToken = this.$route.query.token;
    if (queryToken) {
      const verifyDTO: VerifyDTO = {
        token: queryToken.toString()
      };
      AuthService.verifyUser(verifyDTO)
        .then(res => {
          this.$router.replace("home");
        })
        .catch(err => {
          this.error = err.message; //TODO test errors
        });
    }
  }
}
</script>

<style>
.verificationText {
  margin: 3em 0 0 0;
  width: 30em;
  align-self: center;
}
.flexBoxVerificatiePage {
  margin: 1em;
  display: flex;
  flex-direction: column;
}
</style>
