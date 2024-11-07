interface MonsterStats {
hp: number;
ac: number;
attack: Attack[];
defense: Defense[];
resistances: Resistance[];
vulnerabilities: Vulnerability[];
}

interface Trait {
name: string;
description: string;
}

interface Resistance {
type: string;
value: number;
}

interface Vulnerability {
type: string;
value: number;
}
