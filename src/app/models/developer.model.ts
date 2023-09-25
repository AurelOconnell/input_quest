import { SkillComponent } from "../skill/skill.component";

export class Developer {
    constructor(
        public lastName: string,
        public firstName: string,
        public age: number,
        public gender: string,
        public bio: string,
        public skills: SkillComponent[],
    ) {}
}