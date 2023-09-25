import { Component, OnInit } from '@angular/core';
import { Developer } from '../model/developer.model';
import { Skill } from '../model/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  developer: Developer = new Developer("Faure", "Aurélien", 36, "Male", "Web developer in the making", [
  new Skill("PHP", "https://www.php.net/images/logos/new-php-logo.svg", "https://www.php.net/manual/fr/"),
  new Skill("Symfony", "https://symfony.com/logos/symfony_black_03.png", "https://symfony.com/doc/current/index.html")
  ]
  )

  constructor() {}

  ngOnInit(): void {
    
  }
  
}
