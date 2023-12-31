package Kursovaya18.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya18.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ЗатрВремя
 */
@Entity(name = "IISKursovaya18ЗатрВремя")
@Table(schema = "public", name = "ЗатрВремя")
public class ZatrVremya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Время")
    private Integer время;


    public ZatrVremya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getВремя() {
      return время;
    }

    public void setВремя(Integer время) {
      this.время = время;
    }


}