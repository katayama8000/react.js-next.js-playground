import { DocumentReference, FirestoreDataConverter } from 'firebase/firestore';

export interface FacilityUser {
  firstName: string;
  birthDate: Date;
  gender: DocumentReference<TGender>;
}

interface TGender {
  id: number;
  name: string;
}

export const facilityUserConverter: FirestoreDataConverter<FacilityUser> = {
  toFirestore: (data: FacilityUser) => data,
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    if (data.birthDate) data.birthDate = data.birthDate.toDate();
    const facilityUser: FacilityUser = {
      firstName: `${data.firstName}様`,
      birthDate: data.birthDate,
      gender: data.gender,
    };
    return facilityUser;
  },
};
