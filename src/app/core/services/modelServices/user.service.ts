import { Injectable, NgZone } from '@angular/core';
import { Hotel } from '../models/hotel';
import { User } from '../models/user';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    userData: any;
    constructor(
        public afs: AngularFirestore,
        public afDoc: AngularFirestoreDocument<Hotel>,
    ) {
        this.afs.collection('users').valueChanges().subscribe(data => {
            this.userData = data;
        });
    }
    getUsers() {
        return this.userData;
    }
    getUser(id: string) {
        return this.afs.collection('users').doc(id).valueChanges();
    }
    bookHotel(id: string, hotel: Hotel) {
        return this.afs.collection('users').doc(id).update(hotel);
    }
    removeHotel(id: string, hotel: Hotel) {
        return this.afs.collection('users').doc(id).update(hotel);
    }
    updateUser(id: string, user: User) {
        return this.afs.collection('users').doc(id).update(user);
    }
    deleteUser(id: string) {
        return this.afs.collection('users').doc(id).delete();
    }
    updateProfilePhotoURL(id: string, photoURL: string) {
        return this.afs.collection('users').doc(id).update({ photoURL });
    }    
}
