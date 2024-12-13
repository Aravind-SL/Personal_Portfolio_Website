import {readable} from 'svelte/store';
import Projects from '$data/projects.json';
import Certificate from '$data/certificates.json';
import Skills from '$data/skills.json';

import peopleData from '$data/people.json';

export type ProjectData  = {
    img: string,
    heading: string,
    description: string,
    date: string,
    techs: string[],
    team?: string[],
    url: string,
};

export type CertificateData = {
  image: string,
  heading: string,
  issued_by: string,
  issued_on: string,
  url: string,
};

export type SkillData = {

  category: string,
  skills: string[]
};


export const projects = readable<ProjectData[]>(Projects);

export const people = readable(peopleData);

export const certificates = readable<CertificateData[]>(Certificate);
export const skills = readable<SkillData[]>(Skills);
