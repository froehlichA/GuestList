export class CalcZins {
    calcZins(kapital: number, zinssatz: number, zeit: number) {
        return kapital * zinssatz * zeit / 36000;
    }

    showZins(kapital: number, zinssatz1: number, zinssatz2: number) {
        let msg = `${kapital} bei ..\n\n`;
        for (let zs: number = zinssatz1; zs <= zinssatz2; zs++) {
            const zins: number = this.calcZins(kapital, zs, 360);
            msg += `     ${zs}% p.a.: ${zins}\n`;
        }
        console.log(msg);
    }

}
