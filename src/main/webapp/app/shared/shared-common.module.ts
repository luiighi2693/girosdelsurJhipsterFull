import { NgModule } from '@angular/core';

import { GirosdelsurJhipsterFullSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GirosdelsurJhipsterFullSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GirosdelsurJhipsterFullSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GirosdelsurJhipsterFullSharedCommonModule {}
