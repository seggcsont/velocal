<template>
  <div>
    <Panel editable>
      <template v-slot:default="slotProps">
        <h1 class="text-center font-extrabold">{{name}}</h1>
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th class="px-4 py-2">Name</th>
              <th>
                <div class="w-5"></div>
              </th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="members.length == 0">
              <td
                colspan="3"
                class="text-center font-extrabold text-gray-500"
              >No member members available</td>
            </tr>
            <tr
              v-for="(member, n) in members"
              :key="member.name"
              :class="[n%2 == 1 ? 'bg-blue-200' : 'bg-blue-300']"
            >
              <td class="px-4 py-2 text-justify">{{member.name}}</td>
              <td class="border-r text-right pr-2">
                <span v-if="slotProps.editMode" @click="members.splice(n,1)">
                  <i class="fa fa-trash"></i>
                </span>
              </td>
              <td class="px-4 py-2">{{member.country}}</td>
            </tr>
          </tbody>
        </table>
      </template>
      <template v-slot:editor>
        <form @submit.prevent="addMember">
          <table>
            <tr>
              <td>
                <label for="name">Name</label>
              </td>
              <td>
                <input type="text" id="name" v-model="newMemberName" />
              </td>
            </tr>
            <tr>
              <td>
                <label class="mr-5" for="country">Country</label>
              </td>
              <td>
                <input
                  class="hidden"
                  type="radio"
                  name="country"
                  value="us"
                  id="flag-us"
                  checked
                  v-model="newMemberCountry"
                />
                <label for="flag-us" class="m-2 flag-icon flag-icon-us"></label>
                <input
                  class="hidden"
                  type="radio"
                  name="country"
                  value="in"
                  id="flag-in"
                  v-model="newMemberCountry"
                />
                <label for="flag-in" class="m-2 flag-icon flag-icon-in"></label>
                <input
                  class="hidden"
                  type="radio"
                  name="country"
                  value="hu"
                  id="flag-hu"
                  v-model="newMemberCountry"
                />
                <label for="flag-hu" class="m-2 flag-icon flag-icon-hu"></label>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button class="shadow-md mt-2 bg-blue-600 rounded-lg p-2 text-white">Save</button>
              </td>
            </tr>
          </table>
        </form>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "../components/Panel";
export default {
  name: "members",
  components: {
    Panel,
  },
  data() {
    return {
      newMemberCountry: "",
      newMemberName: "",
      name: this.$route.params.name,
      members: [
        {
          name: "Member 1",
          country: "US",
        },
        {
          name: "Member 2",
          country: "HU",
        },
      ],
    };
  },
  methods: {
    addMember() {
      this.members.push({
        name: this.newMemberName,
        country: this.newMemberCountry,
      });
      this.newMemberName = ""
      this.newMemberCountry = "";
    },
  },
};
</script>

<style scoped>
.flag-icon {
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
  position: relative;
  display: inline-block;
  width: 1.33333333em;
  line-height: 1em;
}

.flag-icon:before {
  content: "\00a0";
}

.flag-icon-hu {
  background-image: url("../assets/hu.svg");
}

.flag-icon-in {
  background-image: url("../assets/in.svg");
}

.flag-icon-us {
  background-image: url("../assets/us.svg");
}

input[type="radio"]:checked + .flag-icon {
  box-shadow: 0 0px 5px 0px blue;
  transform: scale(1.25, 1.25);
}
</style>