package model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity(name="Purchase")
public class Purchase {

	@Id
	@Column(name="purchaseid")
	private int purchaseid;
	
	@ManyToOne
	@JoinColumn(name="username")
	private Userdetail userdetail;
	
	@ManyToOne
	@JoinColumn(name="product")
	private Product product;
	
	@Column(name="purchaseddate")
	private Date purchaseddate;

	public int getPurchaseid() {
		return purchaseid;
	}

	public void setPurchaseid(int purchaseid) {
		this.purchaseid = purchaseid;
	}

	public Userdetail getUserdetail() {
		return userdetail;
	}

	public void setUserdetail(Userdetail userdetail) {
		this.userdetail = userdetail;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Date getPurchaseddate() {
		return purchaseddate;
	}

	public void setPurchaseddate(Date purchaseddate) {
		this.purchaseddate = purchaseddate;
	}
}
