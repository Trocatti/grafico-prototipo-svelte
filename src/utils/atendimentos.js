const _rNumbers = [9999999, 1111111];
const _rNumber = (max, min) => Math.round(Math.random() * (max - min) + min);
const _itensSize = () => _rNumber(0, 23);

// EXPORTS
export const _itens = () => {
    const _itensList = [...new Array(_itensSize())];
    _itensList.forEach((value, index) => {
        _itensList[_rNumber(0, 23)] = {
            item: _rNumber(_rNumbers[0], _rNumbers[1]),
            qtd: _rNumber(500, 0),
            valor: _rNumber(100, 0),
            amostras: 210 + index,
            ocorrencias: 123 + index,
            tempoMedioDeslocado: index,
            aceito: 111 + index,
            removido: "12,3" + index,
            frequencia: "0,5857" + index,
            relevancia: "0,90" + index
        }
    });
    return _itensList;
}

export const rNumber = (max, min) => _rNumber(max, min);
export const itens = _itens;