import DOMAIN_CLUSTERS from './domain-clusters';

import {
    itens
} from './atendimentos';

import {
    atendimentos,
    atendimentosIdList
} from './dynamic-atendimentos';

const _atendimentos = [...atendimentos];
_atendimentos.forEach((value, index) => {

    const _diasSize = value.dias.length;
    const _clustersSize = DOMAIN_CLUSTERS.length;

    const _clusters = [...new Array(_clustersSize)];
    _clusters.forEach((cvalue, cindex) => {

        const _dias = [...new Array(_diasSize)];
        _dias.forEach((dvalue, dindex) => {

            _dias[dindex] = {
                dia: dindex + 1,
                itens: [...itens()]
            }
        });

        _clusters[cindex] = {
            cluster: cindex,
            dias: [..._dias]
        }
    });

    _atendimentos[index] = {
        atendimento: atendimentosIdList[index],
        clusters: [..._clusters]
    }
});

// EXPORTS
export const clusters = _atendimentos;