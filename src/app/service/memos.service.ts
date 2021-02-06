import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class memosService {
    constructor(private httpClient: HttpClient, private firestore: AngularFirestore) { }
    createMemos(data: any) {
        return new Promise<any>((resolve, reject) => {
            this.firestore
                .collection("memos")
                .add(data)
                .then(res => { }, err => reject(err));
        });

    }
    getMemos() {
        return
        this.firestore.collection("memos").snapshotChanges();
    }
    deleteMemos(data: any) {
        return
        this.firestore
            .collection("memos")
            .doc(data.payload.doc.id)
            .delete();
    }
}
