import { Injectable, NgZone } from '@angular/core';
import { Hotel } from '../models/hotel';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
    providedIn: 'root',
})
export class HotelService {
    hotelData: any;
    constructor(
        public afs: AngularFirestore,
        public afDoc: AngularFirestoreDocument<Hotel>,
    ) {
        this.afs.collection('hotels').valueChanges().subscribe(data => {
            this.hotelData = data;
        });
    }
    getHotels() {
        return this.hotelData;
    }
    getHotel(id: string) {
        return this.afs.collection('hotels').doc(id).valueChanges();
    }
    addHotel(hotel: Hotel) {
        return this.afs.collection('hotels').add(hotel);
    }
    updateHotel(id: string, hotel: Hotel) {
        return this.afs.collection('hotels').doc(id).update(hotel);
    }
    deleteHotel(id: string) {
        return this.afs.collection('hotels').doc(id).delete();
    }
}
