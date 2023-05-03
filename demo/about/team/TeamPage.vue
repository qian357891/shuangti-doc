<script lang="ts">
const shuffleMembers = (
  members: Member[],
  pinTheFirstMember = false
): void => {
  let offset = pinTheFirstMember ? 1 : 0
  // `i` is between `1` and `length - offset`
  // `j` is between `0` and `length - offset - 1`
  // `offset + i - 1` is between `offset` and `length - 1`
  // `offset + j` is between `offset` and `length - 1`
  let i = members.length - offset
  while (i > 0) {
    const j = Math.floor(Math.random() * i)
    ;[members[offset + i - 1], members[offset + j]] = [
      members[offset + j],
      members[offset + i - 1]
    ]
    i--
  }
}
</script>

<script setup lang="ts">
import { VTLink } from '@vue/theme'
import membersCoreData from './members-core.json'
import membersEmeritiData from './members-emeriti.json'
import TeamHero from './TeamHero.vue'
import TeamList from './TeamList.vue'
import type { Member } from './Member'
shuffleMembers(membersCoreData as Member[], true)
shuffleMembers(membersEmeritiData as Member[])
</script>

<template>
  <div class="TeamPage">
    <TeamHero>
      <template #title>学生团队</template>
      <template #lead>想看看这里面有没有你认识的学长？安排！ </template>

      <template #action>
        <VTLink href="http://www.shuangtixi.com/index"
          >想了解更多？</VTLink
        >
      </template>
    </TeamHero>

    <TeamList :members="membersCoreData as Member[]">
      <template #title>基地核心成员</template>
      <template #lead
        >想不出骚话了，就这样吧。想不出骚话了，就这样吧。想不出骚话了，就这样吧。想不出骚话了，就这样吧。想不出骚话了，就这样吧。想不出骚话了，就这样吧。想不出骚话了，就这样吧。
      </template>
    </TeamList>

    <TeamList :members="membersEmeritiData as Member[]">
      <template #title>部门核心成员</template>
      <template #lead
        >想不出骚话了，就这样吧。想不出骚话了，就这样吧。想不出骚话了，就这样吧。想不出骚话了，就这样吧。想不出骚话了，就这样吧。想不出骚话了，就这样吧。想不出骚话了，就这样吧。
      </template>
    </TeamList>
  </div>
</template>

<style scoped>
.TeamPage {
  padding-bottom: 16px;
}

@media (min-width: 768px) {
  .TeamPage {
    padding-bottom: 96px;
  }
}

.TeamList + .TeamList {
  padding-top: 64px;
}
</style>
