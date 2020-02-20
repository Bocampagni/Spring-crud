package br.com.alura.forum.controller.form;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import br.com.alura.forum.model.Curso;
import br.com.alura.forum.model.Topico;
import br.com.alura.forum.repository.CursoRepository;



public class TopicoForm {
	
	@NotNull @NotEmpty 
	private String titulo;
	
	@NotNull @NotEmpty 
	private String mensagem;
	
	@NotNull @NotEmpty 
	private String nomeCurso;
	
	
	
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getMensagem() {
		return mensagem;
	}
	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}
	public String getNomeCurso() {
		return nomeCurso;
	}
	public void setNomeCurso(String nomeCurso) {
		this.nomeCurso = nomeCurso;
	}
	public Topico converter(CursoRepository cursorepository) {
		Curso curso = cursorepository.findByNome(nomeCurso);
		return new Topico(titulo, mensagem, curso);
	}
	
	
	

}
