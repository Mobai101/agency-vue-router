<script setup>
import OrangeRoundButton from "../utils/OrangeRoundButton.vue";
import ClientCard from "./ClientCard.vue";
import { ref } from "vue";

const currentClient = ref(1);

const testimonials = [
  {
    name: "Helena Brauer",
    job: "Apple Inc.",
    quote:
      "What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.",
    image: "blackWoman.png",
    backgroundColor: "green",
  },
  {
    name: "Kay Totleben",
    job: "Microsoft",
    quote:
      "What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.",
    image: "blackGuy.png",
    backgroundColor: "purple",
  },
  {
    name: "Helena Brauer",
    job: "Facebook",
    quote:
      "What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.",
    image: "blackWoman.png",
    backgroundColor: "orange",
  },
  {
    name: "Kay Totleben",
    job: "Netflix",
    quote:
      "What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.",
    image: "blackGuy.png",
    backgroundColor: "green",
  },
];

const nextClient = () => {
  if (currentClient.value === testimonials.length) return;

  currentClient.value++;
};

const prevClient = () => {
  if (currentClient.value === 1) return;

  currentClient.value--;
};
</script>

<template>
  <section class="clientSaySection" id="clientSay">
    <div class="clientSayTopSect">
      <div class="container">
        <div class="clientSay_textDiv">
          <h2 class="inknutAntiqua">What our clients say</h2>
          <h4 class="robotoCondensed">testimonials</h4>
        </div>

        <div
          class="clientSay_cardDiv"
          v-touch:swipe.left="nextClient"
          v-touch:swipe.right="prevClient"
        >
          <ClientCard
            v-for="(client, index) in testimonials"
            :client="client"
            :index="index"
            :currentClient="currentClient"
            :key="client.job"
          />
        </div>
      </div>
    </div>
    <div class="clientSayBottomSect">
      <div class="container clientSayBtnFlexContainer">
        <OrangeRoundButton type="left" @click="prevClient" />
        <OrangeRoundButton type="right" @click="nextClient" />
      </div>
      <hr />
    </div>
  </section>
</template>

<style scoped>
/* Desktop */
@media screen {
  .clientSaySection {
    overflow-x: clip;
  }

  .clientSayTopSect {
    background-color: var(--black);
    color: var(--white);
    padding: 9.5rem 0;
    position: relative;
  }

  .clientSay_textDiv {
    width: 29rem;
  }

  .clientSay_textDiv h2 {
    margin-bottom: 2rem;
  }

  /* .clientSay_cardDiv {
  display: flex;
  gap: 1.875rem;
  position: absolute;
  top: 30%;
  left: 50%;
}

.clientSay_card {
  padding: 3rem;
  width: 29.375rem;
  height: 32rem;
} */

  .clientSay_cardDiv {
    position: absolute;
    top: 30%;
    left: 50%;
    overflow-x: clip;
    height: 32rem;
    width: 50%;
    z-index: 5;
  }

  .clientSayBtnFlexContainer {
    padding: 8.5rem 0;
    display: flex;
    gap: 0.5rem;
  }

  .clientSayBottomSect {
    position: relative;
  }
}

/* Tablet */
@media screen and (max-width: 1170px) {
  .clientSay_cardDiv {
    top: 65%;
    left: 45%;
    height: 36rem;
  }

  .clientSayBtnFlexContainer {
    padding: 14rem 0;
  }
}

/* Mobile */
@media screen and (max-width: 480px) {
  .clientSaySection {
    overflow-x: clip;
  }

  .clientSayTopSect {
    background-color: var(--black);
    color: var(--white);
    padding: 6.5rem 0 12.25rem 0;
    position: relative;
  }

  .clientSay_cardDiv {
    width: 100%;
    top: 70%;
    left: 1.5rem;
  }

  .clientSayBtnFlexContainer {
    margin-top: 32rem;
    padding: 5rem 0;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
}
</style>
