<template>
  <div>
    <Panel editable>
      <template v-slot:default="slotProps">
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th class="px-4 py-2">Name</th>
              <th>
                <div class="w-5"></div>
              </th>
              <th class="px-4 py-2">Size</th>
              <th class="px-4 py-2">Members</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="teams.length == 0">
              <td colspan="3" class="text-center font-extrabold text-gray-500">No teams available</td>
            </tr>
            <tr
              v-for="(team, n) in teams"
              :key="team.name"
              :class="[n%2 == 1 ? 'bg-blue-200' : 'bg-blue-300']"
            >
              <td class="px-4 py-2 text-justify">{{team.name}}</td>
              <td class="border-r text-right pr-2">
                <span v-if="slotProps.editMode" @click="teams.splice(n,1)">
                  <i class="fa fa-trash"></i>
                </span>
              </td>
              <td class="border-r px-4 py-2">{{team.members.length}}</td>
              <td class="px-4 py-2">{{team.members.map(member => member.name).join(', ')}}</td>
            </tr>
          </tbody>
        </table>
      </template>
      <template v-slot:editor>
        <label for="team-name">Team name:</label>
        <input
          class="ml-2 pl-2 rounded-lg align-text-bottom outline-none focus:shadow-outline"
          type="text"
          name="team-name"
          id="team-name"
          v-model="newTeamName"
          @keypress="evt => {if (evt.key === 'Enter') teams.push({name: newTeamName, members:[]}); newTeamName = ''}"
        />
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "./Panel.vue";
export default {
  name: "Teams",
  components: {
    Panel,
  },
  data() {
    return {
      teams: [
        {
          name: "Team-A",
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
        },
        {
          name: "Team-B",
          members: [],
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>