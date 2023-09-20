import { Component, ViewEncapsulation } from '@angular/core';
import { Experience } from "../../../shared/models/experience.model";
import {Education} from "../../../shared/models/education.model";

@Component({
  selector: 'app-curiculum',
  templateUrl: './curiculum.component.html',
  styleUrls: ['./curiculum.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CuriculumComponent {

  experiences: Experience[] = [
    {
      "titre": "Lead tech Angular",
      "entreprise": "Cat-amania",
      "client": "Ociane",
      "periode": "Août 2022 à Juin 2023",
      "description": "Développement d'une application web ( télécharger le cv pour le détail )."
    },
    {
      "titre": "Concepteur Développeur Fullstack JS ( Angular/ NodeJS )",
      "entreprise": "Cat-amania",
      "client": "Groupama",
      "periode": "Juillet 2021 à Août 2022",
      "description": "Développement d'une application web ( télécharger le cv pour le détail )."
    },
    {
      "titre": "Concepteur Développeur Front-end Angular",
      "entreprise": "Cat-amania",
      "client": "Bordeaux Métropole Énergie",
      "periode": "Novembre 2020 à Juillet 2021",
      "description": "Développement d'une application web ( télécharger le cv pour le détail )."
    },
    {
      "titre": "Concepteur Développeur Full-Stack JAVA - Angular",
      "entreprise": "Cat-amania",
      "client": "Pôle Emploi",
      "periode": "Septembre 2019 à Novembre 2020",
      "description": "Développement d'une application web ( télécharger le cv pour le détail )."
    },
    {
      "titre": "Concepteur Développeur Front-End",
      "entreprise": "Cat-amania",
      "client": "CGI",
      "periode": "Février 2019 à Août 2019",
      "description": "Développement d'une application web ( télécharger le cv pour le détail )."
    },
    {
      "titre": "Concepteur Développeur Front-End",
      "entreprise": "Accenture",
      "client": "LA BANQUE POSTALE",
      "periode": "Novembre 2016 à Décembre 2018",
      "description": "Développement d'une application web ( télécharger le cv pour le détail )."
    }
  ]

  educations: Education[] = [
    new Education(
      "DUT informatique année spéciale",
      "Université Bordeaux 1",
      "Bordeaux",
      "2015"
    ),
    new Education(
      "Master en sciences Cognitives et Ergonomie",
      "Université Bordeaux 2",
      "Bordeaux",
      "2012-2014"
    ),
    new Education(
      "Licence de Biologie",
      "Université Bordeaux 2",
      "Bordeaux",
      "2009-2012"
    ),
    new Education(
      "Baccalauréat S",
      "Lycée des Graves",
      "Gradignan",
      "2006"
    )]
}
