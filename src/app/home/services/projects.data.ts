import { of } from "rxjs";

const projects = [
  {
    name: 'Project one',
    tags: '#javascript, #fullstack, #ui/ux, #backend',
    image: 'project1.jpg',
  },
  {
    name: 'Project two',
    tags: '#javascript, #fullstack  ',
    image: 'project2.jpg',
  },
];
export function getData(){
    return of(projects)
}