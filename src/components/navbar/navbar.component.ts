import { Component, effect, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as menuItems from "../../common/menu.json";
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnChanges {

  @Input() role: string = "user";
  authService: AuthService = inject(AuthService);

  userMenuList: Array<Menu> = menuItems?.userMenu;
  router: Router = inject(Router);
  userService: UserService = inject(UserService);
  isUserLogin: boolean = this.authService.isLoggedIn$();
  isMenu: boolean = false;
  profileImg!: string;
  constructor() {
    effect(() => {
      this.role = this.authService.role();
      this.isUserLogin = this.authService.isLoggedIn$();
      this.profileImg = this.userService?.getProfileImg();
    })
  }

  ngOnInit(): void {


  }
  ngOnChanges(changes: SimpleChanges): void {
    this.isMenu = false;
    this.role = changes?.['role']?.currentValue;
  }

  openMenu() {
    this.isMenu = !this.isMenu;
  }


  logout() {
    this.openMenu();
    this.authService.logout();
    this.router.navigate(['/user/home']);
  }
}

interface Menu {
  id: number;
  label: string;
  route: string;
  icon: string;
  role: string;
}