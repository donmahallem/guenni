/*!
 * Source https://github.com/donmahallem/guenni Package: db-core
 */
import { guennitypes } from '@guenni/types';
export interface IGuenniCoreDatabase {
    getImage(id: Uint8Array): guennitypes.IImage;
}
