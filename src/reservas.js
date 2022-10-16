

import madeiras from 'dados_itens';
import usuarios from 'dados_artesaos';

export default class reservas {
    
    reservar(item, user, qntd) {
        //alert(`adicionar <${item}> a <${user}>`);
        madeiras[item].qntd -= qntd;

        var nao_achou = true;
        var user_ = usuarios[user];

        if(user_.itens.length > 0) {
            for(var i = 0; i < user_.itens.length; i++) {
                if(user_.itens[i].id == item) {
                    usuarios[user].itens[i].qntd += qntd;
                    nao_achou = false;
                    break;
                }
            }
        }

        if(nao_achou) {
            usuarios[user].itens.push(
            {
                id: item,
                qntd: qntd
            });
        }
    }

    remover(item, user) {
        //alert(`remover <${item}> de <${user}>`);

        for(var i = 0; i < usuarios[user].itens.length; i++) {
            if(usuarios[user].itens[i].id == item) {
                
                madeiras[item].qntd += usuarios[user].itens[i].qntd;
                usuarios[user].itens.splice(i, 1);
                break;
            }
        }
    }
}
