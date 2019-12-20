// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

// public userProfile: firebase.firestore.DocumentReference;
// public currentUser

import { LoadingController, NavController } from '@ionic/angular';
import { AuthService, Profile } from 'src/app/auth/auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    email: string;
    private usersCollection: AngularFirestoreCollection<Profile>;
    private users: Observable<Profile[]>;

    constructor(
        db: AngularFirestore,
        private authSvc: AuthService,
        private loadingController: LoadingController,
        private navController: NavController
    ) {
        this.usersCollection = db.collection<Profile>('users');

        this.users = this.usersCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data }
                });
            })
        );
    }

    addUser(user: Profile, id) {
        return this.usersCollection.doc(id).set(user);
    }

    getUser(email) {
        return this.usersCollection.doc<Profile>(email).valueChanges();
    }

}