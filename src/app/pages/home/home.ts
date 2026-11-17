import { Component } from '@angular/core';
import { Banner } from '../../components/banner/banner';
import { Navbar } from '../../components/navbar/navbar';
import { Counter } from '../../components/counter/counter';
import { Ranking } from '../../components/ranking/ranking';
import { Winners } from '../../components/winners/winners';
import { Products } from '../../components/products/products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Banner, Navbar, Counter, Ranking, Winners, Products],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
