import _ from 'lodash';
import DOMINIO_CLUSTERS from './domain-clusters';
import {
    clusters as CLUSTERS
} from './dynamic-clusters';

import {
    atendimentos as ATENDIMENTOS
} from './dynamic-atendimentos';

// FUNCTIONS
function _getAtendimentos() {
    const _atendimentos = ATENDIMENTOS;
    _.forEach(_atendimentos, (atendimentos, aKey) => {
        const diasList = atendimentos.dias;
        if (diasList && diasList.length) {

            _.forEach(diasList, (dias, dKey) => {
                let totalClustersByDay = 0;
                const clustersList = dias.clusters;

                if (clustersList && clustersList.length) {
                    _.forEach(clustersList, (clusters, cKey) => {
                        const {
                            cluster: id,
                            itens: itensList
                        } = clusters;

                        clusters.cluster = _getCluster(id);

                        if (itensList && itensList.length) {
                            const total = itensList.reduce((sum, item) => item ? sum + item.valor : sum, 0);
                            totalClustersByDay += total;
                            clusters.total = total;
                        }
                    });
                }

                dias.total = totalClustersByDay;
            });

        }
    });

    console.log(_atendimentos);

    return _atendimentos;
}

function _getCluster(id) {
    const fCluster = DOMINIO_CLUSTERS.find(c => c.id === id);
    if (fCluster) {
        return fCluster;
    }
    return id;
}

// EXPORTS
export const gClustersDominio = DOMINIO_CLUSTERS;
export const gColor = index => DOMINIO_CLUSTERS[index].color;
export const gAtendimentos = _getAtendimentos();
export const gClusters = atendimento => {
    const fClusters = CLUSTERS.filter(c => c.atendimento === atendimento);
    _.forEach(fClusters[0].clusters, (value, key) => {
        const id = value.cluster;
        value.cluster = _getCluster(id);
    });
    return fClusters[0];
};