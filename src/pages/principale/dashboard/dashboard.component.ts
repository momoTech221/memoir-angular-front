import { Component, OnInit } from '@angular/core';
import { DeclarationNService } from '../../../app/core/services/naissance/declaration/declaration-n.service';
import { DeclarationMariageService } from '../../../app/core/services/mariage/declaration-mariage.service';
import { DeclarationDService } from '../../../app/core/services/dece/declaration-d.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  ngOnInit(): void {
    this.infoDeclarations()
  }

  nbNaissance: number = 0;
  nbMariage: number = 0;
  nbDece: number = 0;
  totalDeclaration: number = 0;

  constructor(private _naissance:DeclarationNService,
    private _dece: DeclarationDService, private _mariage: DeclarationMariageService
  ){}

  infoDeclarations(){
    this._mariage.getAllDeclarations().subscribe(
      
      res=>{
        for (let i = 0; i < res.length; i++) {
          this.nbMariage++;
        }
        this.totalDeclaration += this.nbMariage;
      }
    )
    //
    this._naissance.getAllDeclarantions().subscribe(
      res=>{
        for (let i = 0; i < res.length; i++) {
          this.nbNaissance++;
        }
        this.totalDeclaration += this.nbNaissance;
      }
    )
    //
    this._dece.getAllDeclarations().subscribe(
      res=>{
        for (let i = 0; i < res.length; i++) {
          this.nbDece++;
        }
        this.totalDeclaration += this.nbDece;
      }
    )
    
  }
}
