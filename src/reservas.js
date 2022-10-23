

import madeiras from 'dados_itens';
import usuarios from 'dados_artesaos';

export default class reservas {
    
    reservar(item, user, qntd) {
        //alert(`adicionar <${item}> a <${user}>`);
        madeiras[item].qntd -= qntd;

        var nao_achou = true;
        var user_ = usuarios[user];
        var vlr_reserva = 0;

        if(user_.itens.length > 0) {
            for(var i = 0; i < user_.itens.length; i++) {
                if(user_.itens[i].id == item) {
                    usuarios[user].itens[i].qntd += qntd;
                    vlr_reserva = usuarios[user].itens[i].reserva;
                    nao_achou = false;
                    break;
                }
            }
        }

        if(nao_achou) {
            vlr_reserva = (Math.floor(Math.random() * 2000));

            usuarios[user].itens.push(
            {
                id: item,
                qntd: qntd,
                reserva: vlr_reserva,
            });
        }

        return vlr_reserva;
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
