// export class repository {
//   public async updateBlockWithFacility<T>(
//     transaction: Transaction,
//     facility: Facility,
//     f: () => Promise<T>
//   ): Promise<T> {
//     const versionRef = doc(
//       this.setting.db,
//       'facilities',
//       facility.id,
//       'collectionVersions',
//       'facilityUsers'
//     ).withConverter<TCollectionVersion>(collectionVersionConverter);
//     const versionDoc = await transaction.get(versionRef);

//     const result = await f();

//     const current = versionDoc.data();
//     transaction.set(versionRef, {
//       version: current !== undefined ? current.version + 1 : 1,
//     });

//     return result;
//   }
// }
