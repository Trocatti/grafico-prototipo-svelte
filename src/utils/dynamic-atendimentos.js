import {
    rNumber,
    itens
} from './atendimentos';

const _rNumbers = [9999999, 1111111];
const _atendimentosIdList = [];
const _atedimentosSize = rNumber(10, 3);
const _clustersSize = () => rNumber(20, 1);
const _diasSize = () => rNumber(7, 1);

const _atendimentos = [...new Array(_atedimentosSize)];
_atendimentos.forEach((value, index) => {

    const _dias = [...new Array(_diasSize())];
    _dias.forEach((dvalue, dindex) => {

        const _clusters = [...new Array(_clustersSize())];
        _clusters.forEach((cvalue, cindex) => {
            _clusters[cindex] = {
                cluster: cindex,
                itens: [...itens()]
            }
        });

        _dias[dindex] = {
            dia: dindex + 1,
            clusters: [..._clusters]
        }
    });


    const key = rNumber(_rNumbers[0], _rNumbers[1]);
    _atendimentosIdList.push(key);
    _atendimentos[index] = {
        atendimento: key,
        dias: [..._dias]
    }
});

// EXPORTS
export const atendimentos = _atendimentos;
export const atendimentosIdList = _atendimentosIdList;